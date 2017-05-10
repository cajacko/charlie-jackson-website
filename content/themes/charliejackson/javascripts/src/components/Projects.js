import $ from 'jquery'

var next = '/page/1/?ajax=true'
var nextPage = 1
const bottomScrollThreshold = 1000
var gettingProjects = false

function getNextProjects(callback) {
  if (next === false) {
    return false
  }

  if (gettingProjects) {
    return false
  }

  gettingProjects = true

  $.ajax({
    url: next,
    context: document.body
  }).done(function(data) {
    gettingProjects = false
    const response = $(data)
    const projects = $(response).find('.ProjectLoopItem')
    getNextUrl(response)
    callback(projects)
  })
}

function getNextUrl(context) {
  if (next === false) {
    return false
  }

  const nextUrl = $(context).find('.pagination .next').attr('href')
  const query = '?ajax=true'

  if (nextUrl) {
    nextPage++
    next = 'page/' + nextPage + '/?ajax=true'
  } else {
    next = false
  }
}

function appendProjects(projectLoop, projects) {
  projects.each(function(i, project) {
    $(projectLoop).append(project)
  })
}

function fetchAndAppendNextProjects() {
  if (next === false) {
    return false
  }

  if (gettingProjects) {
    return false
  }

  getNextProjects(function(projects) {
    const projectLoop = $('#Projects-loop')
    appendProjects(projectLoop, projects)
  })
}

function nearBottomTrigger(callback) {
  $(window).scroll(function() {
    const bottomHeight = $(document).height() - ($(window).scrollTop() + $(window).height())

    if(bottomHeight < bottomScrollThreshold) {
      callback()
    }
  })
}

function hidePagination() {
  $('.pagination').hide()
}

function isProjectLoop() {
  if ($('#Projects-loop')) {
    return true
  }

  return false
}

export default function() {
  if (isProjectLoop()) {
    getNextUrl($(document))

    hidePagination()

    nearBottomTrigger(function() {
      fetchAndAppendNextProjects()
    })
  }
}

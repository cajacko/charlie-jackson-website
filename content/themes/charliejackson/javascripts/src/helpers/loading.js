var loading = {
  images: [],
  projects: []
}

export function getLoading() {
  return loading
}

export function pushToLoading(url, type) {
  loading[type].push({
    url: url,
    time: new Date()
  })
}

export function removeFromLoading(url, type) {
  loading[type].forEach(function(entry, index) {
    if (entry.url === url) {
      loading[type].splice(index, 1);
    }
  })
}

function logError(e) {
  console.error("Log this error to server", e);
}

try {
  function getGigs() {
    const gigs = [];

    let date = new Date();

    date.setDate(date.getDate() - 10);

    for (var i = 0; i < 5; i++) {
      date.setDate(date.getDate() + i * 2);

      gigs.push({
        title: `Gig ${i}`,
        date: date.toISOString(),
        location: `Tap Room, London, UK, N${i} 9JD`,
        link: i % 2 && `https://google.com?s=hello&${i}`
      });
    }

    return Promise.resolve(gigs);
  }

  function ensureDate(date) {}

  function getDay(date) {
    ensureDate(date);

    return ("0" + date.getDate()).slice(-2);
  }

  function getMonth(date) {
    ensureDate(date);

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];

    return monthNames[date.getMonth()];
  }

  function getGigEl(gig) {
    const gigEl = document.createElement("li");

    gigEl.setAttribute(
      "class",
      `gig${gig.isPast ? " gig--past" : ""}${
        gig.isNextShow ? " gig--nextshow" : ""
      }`
    );

    const month = getMonth(gig.date);
    const day = getDay(gig.date);
    const year = gig.date.getFullYear();

    if (!gig.title || typeof gig.title !== "string") {
      throw new Error("gig does not have a title");
    }

    if (!gig.location || typeof gig.location !== "string") {
      throw new Error("gig does not have a location");
    }

    if (gig.link && typeof gig.link !== "string") {
      throw new Error("gig link is not a string");
    }

    gigEl.innerHTML = `
      <div class="gig__date">
        <span class="gig__datemonth">${month}</span>
        <span class="gig__dateday">${day}</span>
        <span class="gig__dateyear">${year}</span>
      </div>
      <div class="gig__content">
        <span class="gig__title">${gig.title}</span>
        <span class="gig__location">${gig.location}</span>
      </div>
      ${
        gig.link
          ? `
        <div class="gig__linkcontainer">
          <a href="${gig.link}" target="_blank" class="gig__link">Details</a>
        </div>
      `
          : ""
      }
    `;

    return gigEl;
  }

  function ensureGigsObject(gigs) {
    if (!gigs) throw new Error("No gigs response");
    if (!Array.isArray(gigs)) throw new Error("gigs response is not an array");
    if (gigs.length < 5) return;
  }

  function scrollToNextShow(el) {
    const nextShow = document.querySelector(".gig--nextshow");

    let scrollTo;

    if (nextShow) {
      scrollTo = nextShow.offsetTop - 30;
    } else {
      scrollTo = el.scrollHeight;
    }

    el.scrollTo({
      top: scrollTo
    });
  }

  function injectGigs(gigs) {
    ensureGigsObject(gigs);

    const gigsContainer = document.getElementById("gigs");

    if (!gigsContainer) throw new Error("No gigs container to inject into");

    const gigsWrapper = document.createElement("div");
    gigsWrapper.setAttribute("class", "gigs__wrapper");

    gigsWrapper.innerHTML = `
      <h3 class="gigs__header">Gigs, Talks and Shows</h3>
    `;

    const gigsContent = document.createElement("ul");
    gigsContent.setAttribute("class", "gigs__list");

    let toggle = false;

    gigs
      .map(gig => {
        if (!gig.date || typeof gig.date !== "string") {
          throw new Error("gig does not have a date");
        }

        const date = new Date(gig.date);
        ensureDate(date);
        const isPast = date.getTime() < Date.now();

        const isNextShow = !isPast && toggle === false;

        if (!isPast) toggle = true;

        return {
          ...gig,
          date,
          isPast,
          isNextShow
        };
      })
      .forEach(gig => {
        const gigEl = getGigEl(gig);

        gigsContent.appendChild(gigEl);
      });

    gigsWrapper.appendChild(gigsContent);
    gigsContainer.appendChild(gigsWrapper);
    scrollToNextShow(gigsContent);
  }

  function init() {
    getGigs()
      .then(gigs => {
        ensureGigsObject(gigs);

        injectGigs(gigs);
      })
      .catch(logError);
  }

  try {
    init();
  } catch (initError) {
    logError(initError);
  }
} catch (globalError) {
  logError(globalError);
}

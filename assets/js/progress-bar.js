function updateProgressBar( total, needed ) {
  const progressBar = document.getElementById("progressBar")
  if (total) {
      progressBar.setAttribute("total", total)
  }
  if (needed) {
      progressBar.setAttribute("needed", needed)
  }
  const totalFiles = progressBar.getAttribute("total");
  const filesNeeded = progressBar.getAttribute("needed")
  progressBar.style.width = `${100 - (filesNeeded/totalFiles*100)}%`
}

function SetFilesTotal( total ) {
  updateProgressBar(total);
}

function SetFilesNeeded( needed ) {
  updateProgressBar(null, needed);
}

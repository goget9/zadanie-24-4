const formatDate = (timeInSeconds) => {
  var hrs = timeInSeconds / 3600
  var min = (timeInSeconds - (Math.floor(hrs) * 3600)) / 60
  var sec = timeInSeconds - (Math.floor(hrs) * 3600) - (Math.floor(min) * 60)
  
  if (Math.floor(hrs) <= 0) {
  	var hours = ''
  } else {
  	var hours = Math.floor(hrs) + 'h'
  }
  if (Math.floor(min) <= 0) {
  	var minutes = ''
  } else {
  	var minutes = Math.floor(min) + 'm'
  }
  if (Math.floor(sec) <= 0) {
  	var seconds = ''
  } else {
  	var seconds = Math.floor(sec) + 's'
  };

  if (Math.floor(hrs) > 0 && Math.floor(min) > 0 && Math.floor(sec) > 0) {

    return `${hours} ${minutes} ${seconds}`

  } else if (Math.floor(hrs) > 0 && Math.floor(min) <= 0 && Math.floor(sec) > 0) {

    return `${hours} ${seconds}`

  } else if (Math.floor(hrs) <= 0 && Math.floor(min) > 0 && Math.floor(sec) > 0) {

    return `${minutes} ${seconds}`
 
  } else if (Math.floor(hrs) <= 0 && Math.floor(min) <= 0 && Math.floor(sec) > 0) {

    return `${seconds}`

  } else if (Math.floor(hrs) > 0 && Math.floor(min) <= 0 && Math.floor(sec) <= 0) {

    return `${hours}`

  } else if (Math.floor(hrs) <= 0 && Math.floor(min) > 0 && Math.floor(sec) <= 0) {

    return `${minutes}`

  } else if (Math.floor(hrs) > 0 && Math.floor(min) > 0 && Math.floor(sec) <= 0) {

    return `${hours} ${minutes}`

  } else {
    seconds = `0s`
    return `${seconds}`
  }
};
module.exports = formatDate;

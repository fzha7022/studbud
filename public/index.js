let navSwitchOn = true;

function switchNav(){
  if (navSwitchOn === true) {
    closeNav();
    navSwitchOn = false;
  }else{
    openNav();
    navSwitchOn = true;
  }
}

function openNav() {
    document.getElementsByClassName('navigation')[0].style.width = "250px";
    document.getElementsByClassName("main")[0].style.marginLeft = "250px";
}
function closeNav() {
    document.getElementsByClassName("navigation")[0].style.width = "0";
    document.getElementsByClassName("main")[0].style.marginLeft = "0";
}

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth'
  });
  calendar.render();
});


var calendar = new Calendar(calendarEl, {
  headerToolbar: { center: 'dayGridMonth,timeGridWeek' }, // buttons for switching between views

  views: {
    dayGridMonth: { // name of view
      titleFormat: { year: 'numeric', month: '2-digit', day: '2-digit' }
      // other view-specific options here
    }
  }
});

var calendar = new Calendar(calendarEl, {
  views: {
    dayGrid: {
      // options apply to dayGridMonth, dayGridWeek, and dayGridDay views
    },
    timeGrid: {
      // options apply to timeGridWeek and timeGridDay views
    },
    week: {
      // options apply to dayGridWeek and timeGridWeek views
    },
    day: {
      // options apply to dayGridDay and timeGridDay views
    }
  }
});
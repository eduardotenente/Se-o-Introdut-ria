var Feat = document.querySelector('div#res1')
var Comp = document.querySelector('div#res2')

function Feature() {
    Feat.innerHTML = '<img src="images/icon-todo.svg">' + 'Todo List'
    Feat.innerHTML += '<img src="images/icon-calendar.svg">' + 'Calendar'
    Feat.innerHTML += '<img src="images/icon-reminders.svg">' + 'Reminders'
    Feat.innerHtml += '<img src="images/icon-planning.svg">' + 'Planning'
}

function Company() {
    Comp.innerHTML = 'History'
    Comp.innerHTML += 'Our Team'
    Comp.innerHTML += 'Blog'
}
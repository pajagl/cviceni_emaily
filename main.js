console.log("Funguji :)")

const showUnread = (emailsInbox) => {
    const inboxUnreadElm = document.querySelector("#unread")
    inboxUnreadElm.innerHTML += emailsInbox
    .map((eachEmail) => `
    <div class="email">
    <div class="email__head">
      <button class="email__icon email__icon--closed"></button>
      <div class="email__info">
        <div class="email__sender">${eachEmail.sender.name}</div>
        <div class="email__subject">${eachEmail.subject}</div>
      </div>
      <div class="email__time">${eachEmail.time}</div>
    </div>
    <div class="email__body"></div>
  </div>` )
  .join("")
  }
  
  fetch("https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread")
  .then(response => response.json())
  .then((data) => showUnread(data.emails))
  
  
  const showRead = (emailsInbox) => {
    const inboxReadElm = document.querySelector("#read")
    inboxReadElm.innerHTML += emailsInbox
    .map((eachEmail) => `
    <div class="email">
    <div class="email__head">
      <button class="email__icon email__icon--opened"></button>
      <div class="email__info">
        <div class="email__sender">${eachEmail.sender.name}</div>
        <div class="email__subject">${eachEmail.subject}</div>
      </div>
      <div class="email__time">${eachEmail.time}</div>
    </div>
    <div class="email__body"></div>
  </div>` )
  .join("")
  }
  
  fetch("https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=read")
  .then(response => response.json())
  .then((data) => showRead(data.emails))
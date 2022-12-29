function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}
function createtitle(title){
  return `
    <h4 style="width:100%"> ${title} </h4> </br>
  `
}

let delay = -0.3
function createcard(date, day, games) {
  delay = delay + 0.3
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
       ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createtitle("Grupo A") +
  createcard(
    "20/11",
    "domingo",
    createGame("qatar", "13:00", "ecuador") +
      createGame("senagal", "13:00", "netherlands")
  ) +
  createcard(
    "25/11",
    "sexta",
    createGame("qatar", "10:00", "senagal") +
      createGame("netherlands", "13:00", "ecuador")
  ) +
  createcard(
    "29/11",
    "terça",
    createGame("netherlands", "12:00", "qatar") +
      createGame("ecuador", "12:00", "senagal")
  ) +

  createtitle("Grupo B") +
  createcard(
    "21/11",
    "segunda",
    createGame("england", "10:00", "iran") +
      createGame("united states", "16:00", "wales")
  ) +
  createcard(
    "25/11",
    "sexta",
    createGame("wales", "07:00", "iran") +
      createGame("england", "16:00", "united states")
  ) +
  createcard(
    "29/11",
    "terça",
    createGame("iran", "16:00", "united states") +
      createGame("wales", "16:00", "england")
  ) +

  createtitle("Grupo C") +
  createcard(
    "22/11",
    "terça",
    createGame("argentina", "07:00", "saudi arabia") +
      createGame("mexico", "13:00", "poland")
  ) +
  createcard(
    "26/11",
    "sábado",
    createGame("poland", "10:00", "saudi arabia") +
      createGame("argentina", "16:00", "mexico")
  ) +
  createcard(
    "30/11",
    "quarta",
    createGame("poland", "16:00", "argentina") +
      createGame("saudi arabia", "16:00", "mexico")
  ) +

  createtitle("Grupo D") +
  createcard(
    "22/11",
    "terça",
    createGame("denmark", "10:00", "tunisia") +
      createGame("france", "16:00", "australia")
  ) +
  createcard(
    "26/11",
    "sábado",
    createGame("tunisia", "07:00", "australia") +
      createGame("france", "13:00", "denmark")
  ) +
  createcard(
    "30/11",
    "quarta",
    createGame("tunisia", "12:00", "france") +
      createGame("australia", "12:00", "denmark")
  ) +

  createtitle("Grupo E") +
  createcard(
    "23/11",
    "quarta",
    createGame("germany", "10:00", "japan") +
      createGame("spain", "13:00", "costa rica")
  ) +
  createcard(
    "27/11",
    "domingo",
    createGame("japan", "07:00", "costa rica") +
      createGame("spain", "16:00", "germany")
  ) +
  createcard(
    "01/12",
    "quinta",
    createGame("japan", "16:00", "spain") +
      createGame("costa rica", "16:00", "germany")
  ) +

  createtitle("Grupo F") +
  createcard(
    "23/11",
    "quarta",
    createGame("morocco", "07:00", "croatia") +
      createGame("belgium", "16:00", "canada")
  ) +
  createcard(
    "27/11",
    "domingo",
    createGame("belgium", "10:00", "morocco") +
      createGame("croatia", "13:00", "canada")
  ) +
  createcard(
    "01/12",
    "quinta",
    createGame("croatia", "12:00", "belgium") +
      createGame("canada", "12:00", "morocco")
  ) +

  createtitle("Grupo G") +
  createcard(
    "24/11",
    "quinta",
    createGame("switzerland", "07:00", "cameroon") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createcard(
    "28/11",
    "segunda",
    createGame("cameroon", "07:00", "serbia") +
      createGame("brazil", "13:00", "switzerland")
  ) +
  createcard(
    "02/12",
    "sexta",
    createGame("brazil", "16:00", "cameroon") +
      createGame("serbia", "16:00", "switzerland")
  ) +

  createtitle("Grupo H")+
  createcard(
    "24/11",
    "quinta",
    createGame("uruguay", "10:00", "south korea") +
      createGame("portugal", "13:00", "ghana")
  ) +
  createcard(
    "28/11",
    "segunda",
    createGame("south korea", "10:00", "ghana") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createcard(
    "02/12",
    "sexta",
    createGame("south korea", "12:00", "portugal") +
      createGame("ghana", "12:00", "uruguay")
  ) 




const bahia = {
	timeZone: 'America/Bahia',
	hour: 'numeric',
  minute: 'numeric',
};

const manaus = {
  timeZone: 'America/Manaus',
	hour: 'numeric',
  minute: 'numeric',
}

const rioBranco = {
  timeZone: 'America/Rio_Branco',
	hour: 'numeric',
  minute: 'numeric',
}


const dateBahia = new Intl.DateTimeFormat([], bahia);
const dateManaus = new Intl.DateTimeFormat([], manaus);
const dateRioBranco = new Intl.DateTimeFormat([], rioBranco);


const timeZoneData = [  
    {
      timezone: 'Feira de Santana',
      localhour: dateBahia.format(new Date())
    },
    {
      timezone: 'Manaus',
      localhour: dateManaus.format(new Date())
    },    
    {
      timezone: 'Rio Branco',
      localhour: dateRioBranco.format(new Date()),
    },
  ]




export default timeZoneData





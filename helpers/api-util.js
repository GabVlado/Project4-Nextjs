export async function getAllEvents(){
  const response =  await fetch('https://react-started-default-rtdb.firebaseio.com/events.json')
  const data = await response.json();
  //console.log(data)
  const events = [];
  //console.log(events)
  for ( const key in data ){
    events.push({
      id:key,
      ...data[key]
    })
  }
  console.log(events)
  return events;
}



export async function getFeaturedEvents() {
  const allEvents = await  getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}


export async function getEventById (id){
  const allEvents = await  getAllEvents();
  return allEvents.find((event) => event.id === id)
}


export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  const allEvents= await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}
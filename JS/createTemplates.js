let createNormalDay = (name, noOfDay, status=null) => {
    // Create the day element
    const day = document.createElement('div');
    day.classList.add('day', 'center', status);

    // Create dayCount element
    const dayCount = document.createElement('div');
    dayCount.id = 'dayCount';
    dayCount.textContent = noOfDay;
 
    // Create dayText element
    const dayText = document.createElement('div');
    dayText.id = 'dayText';
    dayText.textContent = name;

    // Append dayCount and dayText to the day element
    day.appendChild(dayCount);
    day.appendChild(dayText);

    return day;
}
let createTickDay = (status=null) => {
    // Create the day element
    const day = document.createElement('div');
    day.classList.add('day', 'leftAlign', 'done', status);

    // Create tickLeft element
    const tickLeft = document.createElement('div');
    tickLeft.id = 'tickLeft';

    // Create tickRight element
    const tickRight = document.createElement('div');
    tickRight.id = 'tickRight';

    // Append tickLeft and tickRight to the day element
    day.appendChild(tickLeft);
    day.appendChild(tickRight);

    return day;
}
let createHoverTickDay = (name, noOfDay, status=null) => {
    // Create the day element
    const day = document.createElement('div');
    day.classList.add('day', 'center', 'hoverTick', status);

    // Create dayCount element
    const dayCount = document.createElement('div');
    dayCount.id = 'dayCount';
    dayCount.textContent = noOfDay;

    // Create dayText element
    const dayText = document.createElement('div');
    dayText.id = 'dayText';
    dayText.textContent = name;

    // Append dayCount and dayText to the day element
    day.appendChild(dayCount);
    day.appendChild(dayText);

    return day;
}
let createCrossDay = (status=null) => {
    // Create the day element
    const day = document.createElement('div');
    day.classList.add('day', 'center', 'done', status);

    // Create crossLeft element
    const crossLeft = document.createElement('div');
    crossLeft.id = 'crossLeft';

    // Create crossRight element
    const crossRight = document.createElement('div');
    crossRight.id = 'crossRight';

    // Append crossLeft and crossRight to the day element
    day.appendChild(crossLeft);
    day.appendChild(crossRight);

    return day;
}
let createHoverCrossDay = (name, noOfDay, status=null) => {
    // Create the day element
    const day = document.createElement('div');
    day.classList.add('day', 'center', 'hoverCross', status);

    // Create dayCount element
    const dayCount = document.createElement('div');
    dayCount.id = 'dayCount';
    dayCount.textContent = noOfDay;

    // Create dayText element
    const dayText = document.createElement('div');
    dayText.id = 'dayText';
    dayText.textContent = name;

    // Append dayCount and dayText to the day element
    day.appendChild(dayCount);
    day.appendChild(dayText);

    return day;
}
let createTemplate = (name, noOfDay) => {
    for(let i=1; i<=noOfDay; i++) {
        let parent = document.getElementById(`${name[0].toLowerCase()}${i}`);
        
        let normalDay = createNormalDay(name, `${i}`);
        let tickDay = createTickDay('hide');
        let hoverTickDay = createHoverTickDay(name, `${i}`, 'hide');
        let crossDay = createCrossDay('hide');
        let hoverCrossDay = createHoverCrossDay(name, `${i}`, 'hide');
    
        // Append the day element to the parent element
        parent.appendChild(normalDay);
        parent.appendChild(tickDay);
        parent.appendChild(hoverTickDay);
        parent.appendChild(crossDay);
        parent.appendChild(hoverCrossDay);
    }
}  

createTemplate('Trial', 7);
createTemplate('Day', 75);
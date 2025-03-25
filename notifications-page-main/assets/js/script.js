const markAll = document.getElementById('mark-all');
const notificationContainer = document.getElementById('notificationContainer');
const notificationCountElement = document.getElementById('notification-count');
//const notificationDots = document.querySelectorAll('.notification-dot');
//const notificationPost = document.querySelectorAll('.notificationPost');
//const notificationItem = document.querySelector('.bg-(--Very-light-grayish-blue)');

//Función para actualizar el número de notificaciones en la UI
const updateNotificationCount  = (count) => {
    notificationCountElement.textContent = count;

    //Opcional: Puedes oculatar el contador si llega a cero
    if (count === 0){
        notificationCountElement.classList.add('invisible');
    } else{
        notificationCountElement.classList.remove('invisible');
    }
}

//Inicializar el contador de notificaciones al cargar la página
let unreadNotificationCount = notificationContainer.querySelectorAll('.notification-dot').length;
updateNotificationCount(unreadNotificationCount);


//Event listener para el botón "Marcar todas como leídas"
markAll.addEventListener("click", () => {

    const notificationDots = notificationContainer.querySelectorAll('.notification-dot');
    notificationDots.forEach(dot => {
        dot.classList.add('invisible');
    });
    //Eliminar el fondo de las notificaciones
    const notificationItems = notificationContainer.querySelectorAll(".bg-very-light-grayish-blue");
    notificationItems.forEach(item => {
        item.classList.remove("bg-very-light-grayish-blue");
        console.log(item)
    });
    
    //Actualizar el contador a cero
    unreadNotificationCount = 0;
    updateNotificationCount(unreadNotificationCount);
    
});


// Event delegation para los notificaciones individuales
notificationContainer.addEventListener('click', (event) => {
    const clickedNotification = event.target.closest('.notificationItem');

    if (clickedNotification) {
        const dot = clickedNotification.querySelector('.notification-dot');
        if (dot && !dot.classList.contains('invisible')){ // Verificar si esta el punto
            dot.classList.add('invisible');
            // Decrementar el contador de notificaciones no leídas
            unreadNotificationCount--;
            updateNotificationCount(unreadNotificationCount);
            clickedNotification.classList.remove('bg-very-light-grayish-blue');
        } 
    }
});
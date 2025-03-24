const markAll = document.getElementById('mark-all');
const notificationDots = document.querySelectorAll('.not-read');
const notificationPost = document.querySelectorAll('.notificationPost');
const notificationNum = document.querySelector('.notificationsNum');

markAll.addEventListener("click", () => {
    ReadAll();
});

//FUNCIÓN PARA MARCAR TODO COMO LEÍDO
const ReadAll = () => {
    notificationDots.forEach(dot => {
        dot.classList.add('invisible');
    });

    notificationPost.forEach(post => {
        post.classList.remove('bg-(--Very-light-grayish-blue)');
    });

    notificationNum.classList.add('invisible');
    
}


// FUNCIÓN PARA CLICKEAR UNA NOTIFICACÓN NO LEIDA
notificationPost.forEach(post => {
    post.addEventListener('click', () => {
        post.querySelector('.not-read').classList.add('invisible');

        post.classList.remove('bg-(--Very-light-grayish-blue)');
        

        updateNotification();
    });
});

const updateNotification  = () => {
    const notReadElementsActual = document.querySelectorAll('.invisble');
    notificationNum.innerText = notReadElementsActual.length;
    console.log(notReadElementsActual)

}
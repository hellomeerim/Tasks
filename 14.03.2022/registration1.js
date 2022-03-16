let btnSubmit1= document.querySelector('#btn1');

btnSubmit1.onclick = (event) => {
    let surname = document.querySelector('#surname').value;
    let name = document.querySelector('#name').value;
    let patronymic = document.querySelector('#patronymic').value;
    let dateBirth = document.querySelector('#dateBirth').value;
    let address = document.querySelector('#address').value;
    let id = document.querySelector('#id').value;
    let tin = document.querySelector('#tin').value;
    let dateOfGetting = document.querySelector('#dateOfGetting').value;
    let number = document.querySelector('#number').value;
    let mail = document.querySelector('#mail').value;
    let banks = document.querySelector('#banks').value;
    let homeAddress = document.querySelector('#home-address').value;

    let object1 = {
        surname: surname,
        name: name,
        patronymic: patronymic,
        dateBirth: dateBirth,
        address: address,
        id: id,
        tin: tin,
        dateOfGetting: dateOfGetting,
        number: number,
        mail: mail,
        banks: banks,
        homeAddress: homeAddress
    }
   

    let notification = document.querySelector('#message');
 
    const showNotification = () => {
        setTimeout(hideNotification,2000);
        notification.classList.add('d-block');
        notification.textContent = 'Введите обязательные поля: Фамилия, Имя, Серийный номер, ИНН, Дата получения ';
    }
    
    const hideNotification = () => {
        notification.classList.remove('d-block');
    }

    if (surname === '' || name === '' || id === '' || tin === '' || dateOfGetting === ''){
        showNotification();
    } else {
        console.log(object1);
        window.localStorage.setItem('object1', JSON.stringify(object1));
        window.location.href = 'registration2.html';
    }
}


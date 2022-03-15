let btnSubmit= document.querySelector('#btn');
btnSubmit.onclick = (event) => {

    event.preventDefault();
    let userName = document.querySelector('#user-name').value;
    let userPosition = document.querySelector('#user-position').value;
    let userMonthSalary = document.querySelector('#user-month-salary').value;
    let userPeriodSalary = document.querySelector('#user-period-salary').value;
    let phoneStyle = document.querySelector('#phone-style').value;
    let cost = document.querySelector('#cost').value;
    let productNumber = document.querySelector('#product-number').value;
    let totalSum = document.querySelector('#total-sum').value;
    let creditInfo = document.querySelector('#credit-info').value;
    let creditMonth = document.querySelector('#credit-month').value;
    let creditAddress = document.querySelector('#credit-address').value;

    let object2 = {
        name: userName,
        position: userPosition,
        monthSalary: userMonthSalary,
        periodSalary: userPeriodSalary,
        phone: phoneStyle,
        cost: cost,
        product: productNumber,
        total: totalSum,
        info: creditInfo,
        creditMonth: creditMonth,
        address: creditAddress
    }

    console.log(object2)
    let notification = document.querySelector('#message');
 
    const showNotification = () => {
        setTimeout(hideNotification,2000);
        notification.classList.add('d-block');
        notification.textContent = 'Пожалуйста, обязательно введите данные: Наименование организации, Должность, Заработная плата в  месяц, Заработная Плата  за посл.  3 месяца';
    }
    
    const hideNotification = () => {
        notification.classList.remove('d-block');
    }

    if (userName === '' || userPosition === '' || userMonthSalary === '' || userPeriodSalary === ''){
        showNotification()
    } else {
        console.log(object2);
        window.localStorage.setItem('credit', JSON.stringify(credit));
    }
}


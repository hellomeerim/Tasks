let btnSubmit1= document.querySelector('#btn1');

btnSubmit1.onclick = (event) => {
    event.preventDefault();
    let surname = document.querySelector('#surname').value;
    let name = document.querySelector('#name').value;
    let patronymic = document.querySelector('#patronymic').value;
    let address = document.querySelector('#address').value;
    let id = document.querySelector('#id').value;
    let tin = document.querySelector('#tin').value;
    let number = document.querySelector('#number').value;
    let mail = document.querySelector('#mail').value;
    let banks = document.querySelector('#banks').value;
    let homeAddress = document.querySelector('#home-address').value;

    let object = {
        surname: surname,
        name: name,
        patronymic: patronymic,
        address: address,
        id: id,
        tin: tin,
        number: number,
        mail: mail,
        banks: banks,
        homeAddress: homeAddress
    }
    console.log(object)

}
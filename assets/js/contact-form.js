function submitData () {
    let name = document.querySelector('.input-name').value
    let email = document.querySelector('.input-email').value
    let pnumber = document.querySelector('.input-pnumber').value
    let subject = document.querySelector('.input-subject').value
    let message = document.querySelector('.input-message').value


    if (name) {
        name = document.querySelector('.input-name').value
    } else {
        return alert('name harus diisi')
    }
    
    if (email) {
        email = document.querySelector('.input-email').value
    } else {
        return alert('email harus diisi')
    }

    if (pnumber) {
        pnumber = document.querySelector('.input-pnumber').value
    } else {
        return alert('number harus diisi')
    }

    if (subject) {
        subject = document.querySelector('.input-subject').value
    } else {
        return alert('subject harus diisi')
    }

    if (message) {
        message = document.querySelector('.input-message').value
    } else {
        return alert('message harus diisi')
    } 


    console.log(name) 
    console.log(email)
    console.log(pnumber)
    console.log(subject)
    console.log(message)
    

    let emailReceiver = email
    let p = document.createElement('a')
    

    p.href = `mailto:${emailReceiver}?subject=${subject}&body=Hallo nama saya ${name} ${message} silahkan hubungi ${pnumber} Email: ${email}`
    p.click()

    let data = {
        name,
        email,
        pnumber,
        subject,
        message
    }

    console.log(data);

     
}
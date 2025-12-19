// onload();
function onload() {
    Swal.fire({
        title: 'Please insert your name',
        // text: "You will "+ name +" this Cash Book!",
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ok",
        allowEscapeKey: false,
        allowOutsideClick: false,
        input: "text",
        inputPlaceholder: "Type your name here...",
        preConfirm: (guest_name) => {
            if(guest_name == ''){
                Swal.showValidationMessage(
                'Oops.. Please fill your name'
            )
            }else{
                return {
                    value:true,
                    guest_name:guest_name,
                };
            }
        },
    }).then((result) => {
        var name = result.value.guest_name;
        // Get the welcome-text DOM element
        const welcomDOM = document.getElementById('welcome-text');
        welcomDOM.innerHTML = 'Welcome, ' + name + '!';
    })
}

// alerting
function alerting(icon, title, text) {
    swal.fire({
        icon: icon,
        title: title,
        text: text,
        // allowOutsideClick: false,
    });
}

$('#birth_date').datepicker({
    format: 'dd/mm/yyyy',
    autoclose: true,
    todayHighlight: true,
    endDate: new Date()
});

// Form handling
const form = document.getElementById('formContact');
form.addEventListener('submit', function(e) {
    e.preventDefault();


    const name = document.getElementById('name').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const birth_date = document.getElementById('birth_date').value;
    const message = document.getElementById('message').value;

    const currentDate = new Date().toString();
    const now = currentDate.toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // Use 24-hour format
    });


    var row_exist = document.getElementById('row_exist');
    if(row_exist) {
        row_exist.remove();
    }
    // document.getElementById('tbody_response').innerHTML = `
    //     <p><strong>Current time :</strong> ${now}</p>
    //     <p><strong>Nama :</strong> ${name}</p>
    //     <p><strong>Tanggal Lahir :</strong> ${birth}</p>
    //     <p><strong>Jenis Kelamin :</strong> ${gender}</p>
    //     <p><strong>Pesan :</strong> ${message}</p>
    // `;

    // document.getElementById('tbody_response').append(`
    //         <tr>
    //             <td>${name}</td>
    //             <td>${gender}</td>
    //             <td>${birth_date}</td>
    //             <td>${message}</td>
    //             <td>${now}</td>
    //         </tr>
    //     `);
    document.getElementById('tbody_response').innerHTML += `
        <tr>
            <td>${name}</td>
            <td>${gender}</td>
            <td>${birth_date}</td>
            <td>${message}</td>
            <td>${now}</td>
        </tr>
    `;

    form.reset();
});
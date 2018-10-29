
        // Guestlist
        let guest_array = [];

        if(localStorage.getItem('stored_guest_list')){
            guest_array = JSON.parse(localStorage.getItem('stored_guest_list'));

            add_guests_to_list();
        }
        
        

        function get_form_data(){
            //save form in a variable
        
        let guestForm = document.getElementById('guest-form');

        if( guestForm.age.value < 18 ){
            alert("You are not over 18");
            return;
        }

            //create a temporary guest obj
        let guest = {
            fname: guestForm.firstname.value,
            lname: guestForm.lastname.value,
            age: guestForm.age.value,
            phone: guestForm.phone.value,
            bringing: guestForm.bringing.value,
            psw: guestForm.psw.value,
            check1: guestForm.check1.value,
            check2: guestForm.check2.value,
            check3: guestForm.check3.value,
            favcolor: guestForm.favcolor.value,
            bday: guestForm.bday.value,
            points: guestForm.points.value
        }

        
             // push guest obj into guest array
        guest_array.push(guest);
        localStorage.setItem('stored_guest_list', JSON.stringify(guest_array));

            add_guests_to_list()
        }

        function add_guests_to_list() {
            

            document.getElementById('guest-list').innerHTML = '';

            guest_array.map((guest, index) => {

                    // create tabel row element
                let node = document.createElement('TR');

                node.setAttribute('id', index);

                    //add content to table row
                node.innerHTML = 
                '<td>' + guest.fname + '</td>' + 
                '<td>' + guest.lname + '</td>' +
                '<td>' + guest.age + '</td>' +
                '<td>' + guest.phone + '</td>' +
                '<td>' + guest.bringing + '</td>' +
                '<td>' + guest.psw + '</td>' +
                '<td>' + guest.check1 + ', ' + guest.check2 + ', ' + guest.check3 + '</td>' +
                '<td>' + guest.favcolor + '</td>' +
                '<td>' + guest.bday + '</td>' +
                '<td>' + guest.points + '</td>' + 
                '<td><button onClick=delete_one_guest('+index+')> Delete <button> </td>';

                    // insert tabel row with content in tbody with id guest-list
                document.getElementById('guest-list').appendChild(node);
            });
            
        }


        function remove_all_guests() {
            localStorage.setItem('stored_guest_list', '');
            guest_array.length = 0;
            add_guests_to_list();
        }

        function delete_one_guest(index) {
            guest_array.splice(index, 1);
            //console.log(index);
            localStorage.setItem('stored_guest_list', JSON.stringify(guest_array));
            add_guests_to_list();
        }



//Return avbryter hela functionen - stannar upp allt



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
            bringing: guestForm.bringing.value
        }
        
             // push guest obj into guest array
        guest_array.push(guest);
        localStorage.setItem('stored_guest_list', JSON.stringify(guest_array));

            add_guests_to_list()
        }

        function add_guests_to_list() {
            

            document.getElementById('guest-list').innerHTML = '';

            guest_array.map(guest => {

                    // create tabel row element
                let node = document.createElement('TR');

                    //add content to table row
                node.innerHTML = 
                '<td>' + guest.fname + '</td>' + 
                '<td>' + guest.lname + '</td>' +
                '<td>' + guest.age + '</td>' +
                '<td>' + guest.phone + '</td>' +
                '<td>' + guest.bringing + '</td>';

                    // insert tabel row with content in tbody with id guest-list
                document.getElementById('guest-list').appendChild(node);
            });
            
        }

        function remove_all_guests() {
            localStorage.setItem('stored_guest_list', '');
            guest_array.length = 0;
            add_guests_to_list();
        }

//Return avbryter hela functionen - stannar upp allt

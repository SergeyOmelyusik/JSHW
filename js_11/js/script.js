class User {

    constructor(obj) {

        this.data = {
            id: obj.id ||0,
            name: obj.name || '--',
            email: obj.email || '--',
            address:  obj.address || '--',
            phone:  obj.phone || '--'
        }

    }

        edit(obj) {
            this.data.id = obj.id;
            this.data.name = obj.name;
            this.data.email = obj.email;
            this.data.address = obj.address;
            this.data.phone = obj.phone;
        }

        get() {
            return this.data;
        }
    
}

class Contacts {

    data = [];

    add(obj) {
        let user = new User(obj);
        this.data.push(user);
    }

    remove(id) {
        this.data.forEach((user,i) => {
            if(user.data.id == id) {
                this.data.splice(i,1)
            }
        });
    }

    edit(id, obj) {
        let editUser;
        this.data.forEach(user => {
            if(user.data.id == id) editUser = user;
        })

        editUser.edit(obj);
    }

    get() {
        return this.data;
    }

}

class ContactsApp extends Contacts {

    elem = document.createElement('div');
    body = document.body;
   
    constructor() {
        super();

        this.id = 1;

        this.elem.classList.add('container')
        this.body.append(this.elem);

        this.elem.innerHTML = `
        <div class="contacts__header">
            <h1>ContactsApp</h1>
            <div class="btn_add"></div>
        </div>

        <div class="add__form hidden">
            <form action="#" >
           
                <div class="field">Name<input  type="text" class="name" name="name"></div>
                <div class="field">Phone<input type="tel" class="phone" name = "phone"></div>
                <div class="field">Address<input type="text" class="address" name="address"></div>
                <div class="field">Email<input type="email" class="email" name="email"></div>
                <button class="btn__added">add</button>
            </form>
        </div>
        <div class="contacts"></div>`;
    }

    onAdd() {
        let contact = {};

        contact.id = this.id;
        contact.name = document.querySelector('.name').value;
        contact.address = document.querySelector('.address').value;
        contact.email = document.querySelector('.email').value;
        contact.phone = document.querySelector('.phone').value;

        document.querySelector('.name').value = "";
        document.querySelector('.address').value = "";
        document.querySelector('.email').value = "";
        document.querySelector('.phone').value = "";

        super.add(contact);
        this.id++
    };

    onEdit(editItem) {
       
        let editForm = document.querySelector('.edit__form');

        let editedContact = {};

        let id = editItem;

        editedContact.id= id;
        editedContact.name = editForm.querySelector('.name').value;
        editedContact.address = editForm.querySelector('.address').value;
        editedContact.email = editForm.querySelector('.email').value;
        editedContact.phone = editForm.querySelector('.phone').value;

        super.edit(id, editedContact);
        this.get();
    }

    onRemove() {
        let deleteItem = event.target.closest('.contact__item');
        let id = deleteItem.dataset.id;
        super.remove(id);
        this.get();
    }

    get() {
        let contactsInfo = super.get();

        let contacts = document.querySelector('.contacts');

        while(contacts.firstChild) {
            contacts.removeChild(contacts.firstChild);
        }

        contactsInfo.forEach(item =>  this.show(item));
    }

    show(item) {
        let contactItem = document.createElement('div');
        contactItem.classList.add('contact__item');

        contactItem.setAttribute('data-id', item.data.id);
        contactItem.classList.add('contact__item');

        let content = document.createElement('div');
        content.classList.add('contact__item__content');

        let buttons = document.createElement('div');
        buttons.classList.add('contact__item__buttons');
        
        let editBtn = document.createElement('div');
        editBtn.classList.add('edit__btn');

        let deleteBtn = document.createElement('div');
        deleteBtn.classList.add('delete__btn');
        
        buttons.append(editBtn,deleteBtn);
        contactItem.append(content,buttons);

        content.innerHTML = `<h3> Name: <span>${item.data.name}</span> </br>Phone: <span>${item.data.phone}</span> </h3> email: <span>${item.data.email}</span>;   address: <span>${item.data.address}</span> </br>`;

        document.querySelector('.contacts').append(contactItem);

        editBtn.addEventListener('click', (event) => {
            let editPopup = document.createElement('div');
            editPopup.classList.add('edit__popup');
            document.body.append(editPopup);
            editPopup.innerHTML = `
            <div class = "popup__modal">
                <div class = "close__popup">X</div>
                <div class="edit__form">
                    <form action="#" >
                        <div>Name<input type="text" class="name" name="name" value = "${item.data.name}"></div>
                        <div>Phone<input type="tel" class="phone" name = "phone" value = "${item.data.phone}"></div>
                        <div>Address<input type="text" class="address" name="address" value = "${item.data.address}"></div>
                        <div>E-mail<input type="email" class="email" name="email" value = "${item.data.email}"></div>
                        <button class="save">save</button>
                    </form>
                </div>
            </div>`;

            let popupClose = document.querySelector('.close__popup');
            popupClose.addEventListener('click', function(event){
                editPopup.remove();
            });

            let editItem = event.target.closest('.contact__item').dataset.id;
            console.log(editItem)
            

            let saveBtn = document.querySelector('.save');

            saveBtn.addEventListener('click', (event) => {
                event.preventDefault()
                this.onEdit(editItem);
                this.get();

                let message = document.createElement('p');
                message.classList.add('done');
                message.innerHTML='Changes saved successfully';

                let popupModal = document.querySelector('.popup__modal');

                popupModal.append(message);

                const removeMsg  = function() {
                    message.remove();
                    editPopup.remove();
                }

                setTimeout(removeMsg, 2000);
            }); 
        });

        deleteBtn.addEventListener('click', (event) => this.onRemove()); 

    }

    init() {
        
        let btnAdd = document.querySelector('.btn_add');
        let btnAdded = document.querySelector('.btn__added');
        let form = document.querySelector(".add__form");
       
        btnAdd.addEventListener('click', function() {
            form.classList.toggle('hidden')}) ;
            
        btnAdded.addEventListener('click', (event) => {
            event.preventDefault()
            form.classList.add('hidden');

            this.onAdd(event);
            this.get();

        });
    };
}


let contact = new ContactsApp();
contact.init();






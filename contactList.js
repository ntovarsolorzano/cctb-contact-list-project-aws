// Contact List Management System

// Initialize the contact list with three users
let contacts = [
    {
        name: "John Doe",
        phone: "1234 567 890",
        email: "john.doe@example.com"
    },
    {
        name: "Jane Smith",
        phone: "2345 678 901",
        email: "jane.smith@example.com"
    },
    {
        name: "Bob Johnson",
        phone: "3456 789 012",
        email: "bob.johnson@example.com"
    }
];

// Function to display the contact list
function displayContacts() {
    console.log("\nCurrent Contact List:");
    console.log("--------------------");
    contacts.forEach((contact, index) => {
        console.log(`${index + 1}. Name: ${contact.name}`);
        console.log(`   Phone: ${contact.phone}`);
        console.log(`   Email: ${contact.email}`);
        console.log("--------------------");
    });
}

// Function to add a new contact
function addContact(name, phone, email) {
    contacts.push({ name, phone, email });
    console.log(`\nNew contact added: ${name}`);
}

// Function to show first and last contacts
function showFirstAndLastContacts() {
    console.log("\nFirst and Last Contacts:");
    console.log("--------------------");
    
    // First contact
    console.log("First Contact:");
    console.log(`Name: ${contacts[0].name}`);
    console.log(`Phone: ${contacts[0].phone}`);
    console.log(`Email: ${contacts[0].email}`);
    console.log("--------------------");
    
    // Last contact
    const lastIndex = contacts.length - 1;
    console.log("Last Contact:");
    console.log(`Name: ${contacts[lastIndex].name}`);
    console.log(`Phone: ${contacts[lastIndex].phone}`);
    console.log(`Email: ${contacts[lastIndex].email}`);
}

// Test the functionality
console.log("1. Initial Contact List:");
displayContacts();

// Add new contact
console.log("\n2. Adding new contact:");
addContact("Maisie Haley", "0913 531 3030", "risus.Quisque@urna.ca");

// Display updated list
console.log("\n3. Updated Contact List:");
displayContacts();

// Show first and last contacts
console.log("\n4. First and Last Contacts:");
showFirstAndLastContacts();
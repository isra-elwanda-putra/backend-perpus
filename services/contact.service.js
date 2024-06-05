const { ContactModel } = require("../models");
console.log(ContactModel);
const createContactService = async (namaLengkap, email, nomorTelepon, pesan) => {
    try {
        const message = 'successfully complete the registration';
        // Buat instance baru dari model Contact
        const newContact = new ContactModel({
            namaLengkap: namaLengkap,
            email: email,
            nomorTelepon: nomorTelepon,
            pesan: pesan,
        });
        // Simpan data ke MongoDB
        await newContact.save();
        return { success: true, message: "Pesan Terkirim" };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

module.exports = { createContactService }
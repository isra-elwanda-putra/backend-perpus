const { createContactService } = require('../services/contact.service');
module.exports = {
    findOneContact: async (req, res) => {
        const { namaLengkap, email, nomorTelepon, pesan } = req.body;
        const result = createContactService(namaLengkap, email, nomorTelepon, pesan);
        res.status(200).json({ success: result.success, message: result.message });
    },
    findAllContact: async (req, res) => {
        const { namaLengkap, email, nomorTelepon, pesan } = req.body;
        const result = await createContactService(namaLengkap, email, nomorTelepon, pesan);
        res.status(200).json({ success: result.success, message: result.message });
    },
    createContact: async (req, res) => {
        const { namaLengkap, email, nomorTelepon, pesan } = req.body;
        const result = await createContactService(namaLengkap, email, nomorTelepon, pesan);
        res.status(200).json({ success: result.success, message: result.message });
    },
    updateContact: async (req, res) => {
        const { namaLengkap, email, nomorTelepon, pesan } = req.body;
        const result = await createContactService(namaLengkap, email, nomorTelepon, pesan);
        res.status(200).json({ success: result.success, message: result.message });
    },
    deleteContact: async (req, res) => {
        const { namaLengkap, email, nomorTelepon, pesan } = req.body;
        const result = await createContactService(namaLengkap, email, nomorTelepon, pesan);
        res.status(200).json({ success: result.success, message: result.message });
    }
}
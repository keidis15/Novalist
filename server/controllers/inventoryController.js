import Inventory from "../models/inventoryModel.js";

const getItems = async (req, res) => {
    try {
        const items = await Inventory.getByUser(req.user.id);
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: "Error al cargar el inventario" });
    }
};

const addItem = async (req, res) => {
    const { name, category, stock, price, image_url } = req.body;
    try {
        const newItem = await Inventory.create(req.user.id, name, category, stock, price, image_url);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ error: "Error al registrar el producto" });
    }
};

const updateItem = async (req, res) => {
    const { id } = req.params;
    try {
        const updated = await Inventory.update(id, req.user.id, req.body);
        if (!updated) return res.status(404).json({ error: "Producto no encontrado" });
        res.json(updated);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el producto" });
    }
};

export default { getItems, addItem, updateItem };
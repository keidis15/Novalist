import Transaction from "../models/transactionModel.js";

const getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.getByUser(req.user.id);
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener transacciones" });
    }
};

const getChartData = async (req, res) => {
    try {
        const summary = await Transaction.getSummary(req.user.id);
        res.json(summary);
    } catch (error) {
        res.status(500).json({ error: "Error al generar datos del gráfico" });
    }
};

const addTransaction = async (req, res) => {
    const { concept, amount, transaction_type, transaction_date } = req.body;
    try {
        const newRecord = await Transaction.create(
            req.user.id, 
            concept, 
            amount, 
            transaction_type, 
            transaction_date
        );
        res.status(201).json(newRecord);
    } catch (error) {
        res.status(500).json({ error: "Error al registrar el movimiento" });
    }
};

export default { getTransactions, getChartData, addTransaction };
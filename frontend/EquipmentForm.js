import { useEffect, useState } from "react";

const initialState = {
  name: "",
  type: "Machine",
  status: "Active",
  lastCleaned: ""
};

export default function EquipmentForm({ fetchEquipment, editingItem, setEditingItem }) {
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (editingItem) setForm(editingItem);
  }, [editingItem]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.lastCleaned) {
      alert("Please fill all fields");
      return;
    }

    const method = editingItem ? "PUT" : "POST";
    const url = editingItem
      ? `http://localhost:5000/api/equipment/${editingItem.id}`
      : "http://localhost:5000/api/equipment";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    setForm(initialState);
    setEditingItem(null);
    fetchEquipment();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Equipment Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />

      <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
        <option>Machine</option>
        <option>Vessel</option>
        <option>Tank</option>
        <option>Mixer</option>
      </select>

      <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}>
        <option>Active</option>
        <option>Inactive</option>
        <option>Under Maintenance</option>
      </select>

      <input
        type="date"
        value={form.lastCleaned}
        onChange={e => setForm({ ...form, lastCleaned: e.target.value })}
      />

      <button type="submit">{editingItem ? "Update" : "Add"}</button>
    </form>
  );
}

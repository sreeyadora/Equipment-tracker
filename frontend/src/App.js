import { useEffect, useState } from "react";
import EquipmentForm from "./components/EquipmentForm";
import EquipmentTable from "./components/EquipmentTable";
import "./App.css";

function App() {
  const [equipment, setEquipment] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  // Search & filter state
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  // Sorting state
  const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: "asc"
  });

  const fetchEquipment = async () => {
    const res = await fetch("http://localhost:5000/api/equipment");
    const data = await res.json();
    setEquipment(data);
  };

  useEffect(() => {
    fetchEquipment().catch(console.error);
  }, []);

  // Filter
  const filteredEquipment = equipment.filter(item => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase());
    const matchesType =
      typeFilter === "" || item.type === typeFilter;
    const matchesStatus =
      statusFilter === "" || item.status === statusFilter;

    return matchesSearch && matchesType && matchesStatus;
  });

  // Sort
  const sortedEquipment = [...filteredEquipment].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aVal = a[sortConfig.key];
    const bVal = b[sortConfig.key];

    if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
    if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="container">
      <h2>🛠️ Equipment Tracker</h2>

      <div className="filters">
        <input
          placeholder="Search by name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <select
          value={typeFilter}
          onChange={e => setTypeFilter(e.target.value)}
        >
          <option value="">All Types</option>
          <option>Machine</option>
          <option>Vessel</option>
          <option>Tank</option>
          <option>Mixer</option>
        </select>

        <select
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value)}
        >
          <option value="">All Status</option>
          <option>Active</option>
          <option>Inactive</option>
          <option>Under Maintenance</option>
        </select>
      </div>

      <EquipmentForm
        fetchEquipment={fetchEquipment}
        editingItem={editingItem}
        setEditingItem={setEditingItem}
      />

      <EquipmentTable
        equipment={sortedEquipment}
        setEditingItem={setEditingItem}
        fetchEquipment={fetchEquipment}
        requestSort={requestSort}
        sortConfig={sortConfig}
      />
    </div>
  );
}

export default App;

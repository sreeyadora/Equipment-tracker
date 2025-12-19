export default function EquipmentTable({
  equipment,
  setEditingItem,
  fetchEquipment,
  requestSort,
  sortConfig
}) {
  const deleteItem = async (id) => {
    await fetch(`http://localhost:5000/api/equipment/${id}`, {
      method: "DELETE"
    });
    fetchEquipment();
  };

  const getArrow = (key) => {
    if (sortConfig.key !== key) return "";
    return sortConfig.direction === "asc" ? " ▲" : " ▼";
  };

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => requestSort("name")}>
            Name{getArrow("name")}
          </th>
          <th onClick={() => requestSort("type")}>
            Type{getArrow("type")}
          </th>
          <th onClick={() => requestSort("status")}>
            Status{getArrow("status")}
          </th>
          <th onClick={() => requestSort("lastCleaned")}>
            Last Cleaned{getArrow("lastCleaned")}
          </th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {equipment.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.status}</td>
            <td>{item.lastCleaned}</td>
            <td>
              <button onClick={() => setEditingItem(item)}>Edit</button>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

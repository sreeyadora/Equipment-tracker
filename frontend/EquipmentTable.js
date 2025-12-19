export default function EquipmentTable({ equipment, setEditingItem, fetchEquipment }) {
  const deleteItem = async (id) => {
    await fetch(`http://localhost:5000/api/equipment/${id}`, { method: "DELETE" });
    fetchEquipment();
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Status</th>
          <th>Last Cleaned</th>
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

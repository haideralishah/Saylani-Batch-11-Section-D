export default function UsersData({ name, email, role, pic, logo }) {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={pic || logo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>{role}</td>
      <td>
        <select className="select select-bordered w-full max-w-xs">
          <option selected>Select Action</option>
          <option>Delete</option>
          <option>Block</option>
        </select>
      </td>
      {/* <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th> */}
    </tr>
  );
}

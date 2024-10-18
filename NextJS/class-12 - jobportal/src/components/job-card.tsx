type JobCardType = {
  jobTitle: string;
  jobDescription: string;
  hold?: boolean;
  deleted?: boolean;
};

export default function JobCard({
  jobTitle,
  jobDescription,
  hold,
  deleted,
}: JobCardType) {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{jobTitle}</h2>
        <p>{jobDescription}</p>
        <p>{(hold || deleted) && "Your job is pending, contact admin."}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Edit</button>
          <button className="btn btn-primary">Delete</button>
        </div>
      </div>
    </div>
  );
}

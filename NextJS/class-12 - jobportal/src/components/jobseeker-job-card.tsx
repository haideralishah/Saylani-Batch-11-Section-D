type JobCardType = {
  jobTitle: string;
  jobDescription: string;
  salaryRange: string;
  qualification: string;
  skillSet: string;
};

export default function JobseekerCard({
  jobTitle,
  jobDescription,
  salaryRange,
  qualification,
  skillSet,
}: JobCardType) {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{jobTitle}</h2>
        <p>{jobDescription}</p>
        <p>{salaryRange}</p>
        <p>{skillSet}</p>
        <p>{qualification}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Favorite</button>
          <button className="btn btn-primary">Apply Now</button>
        </div>
      </div>
    </div>
  );
}

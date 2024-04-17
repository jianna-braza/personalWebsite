export default function Projects() {
  return (
    <div className="d-flex flex-column" >
      <h2 className="pb-3">Projects:</h2>
      <h3>Aquanaut's Website (INFO 442 Project)</h3>
      <p>
        This website was made to help aid in one of the United Nation's Sustainable Development Goals: #6 Clean Water and Sanitation.
        The app aims to serve three purposes for the people of King County, WA:
      </p>
      <ul>
        <li>Be a resource that people can use to help find clean water resources: water bottle refilling stations, water fountains, public restrooms, etc.</li>
        <li>Serve as a hub to help promote charities that people can donate to or learn more</li>
        <li>Educate users of the current state of King County and how water availability affects the community</li>
      </ul>
      <img src="aquanautsWebsite.png" alt="screenshot of aquanaut's website" width="600" height="500"/>
      <a href="https://github.com/UW-INFO442-AU23/aquanauts" ><button type="button" className="btn btn-primary btn-lg mt-5">Click here to see the repository!</button></a>
    </div>
  );
}
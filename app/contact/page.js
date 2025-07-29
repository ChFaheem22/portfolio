const Contacts = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>You can reach me via the following platforms:</p>

      <div className="info">
        <ul>
          <li>
            📧 Email:{" "}
            <a
              href="mailto:faheemchh779@gmail.com"
              rel="noopener noreferrer"
            >
              faheemchh779@gmail.com
            </a>
          </li>

          <li>
            💻 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/faheem-95772830b"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/faheem-95772830b
            </a>
          </li>

          <li>
            🔗 GitHub:{" "}
            <a
              href="https://github.com/ChFaheem22"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/ChFaheem22
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;


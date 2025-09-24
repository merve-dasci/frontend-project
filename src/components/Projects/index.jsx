const Projects = () => {

  return (
    <section 
      className="bg-white dark:bg-gray-800"
      style={{
        padding: "4rem 2rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "1065px", height: "800px", margin: "0 auto" }}>
        <h2
          className="text-gray-900 dark:text-white"
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "3rem",
          }}
        >
          Projects
        </h2>

        <div style={{ display: "flex", gap: "2rem", height: "600px" }}>
         
          <div
            style={{
              backgroundColor: "#dbeafe",
              borderRadius: "16px",
              padding: "24px 24px 0 24px",
              width: "50%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: "#111827",
                marginBottom: "12px",
              }}
            >
              Random Jokes
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#4b5563",
                marginBottom: "16px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
            </p>

            <div style={{ marginBottom: "16px" }}>
              <span
                style={{
                  backgroundColor: "white",
                  color: "#2563eb",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  marginRight: "8px",
                }}
              >
                react
              </span>
              <span
                style={{
                  backgroundColor: "white",
                  color: "#2563eb",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  marginRight: "8px",
                }}
              >
                vercel
              </span>
              <span
                style={{
                  backgroundColor: "white",
                  color: "#2563eb",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "12px",
                }}
              >
                axios
              </span>
              <span
                style={{
                  backgroundColor: "white",
                  color: "#2563eb",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "12px",
                }}
              >
                router
              </span>
            </div>

            <div style={{ marginBottom: "60px" }}>
              <a
                href="#"
                style={{
                  fontSize: "14px",
                  color: "#111827",
                  marginRight: "16px",
                }}
              >
                View on Github
              </a>
              <a href="#" style={{ fontSize: "14px", color: "#111827" }}>
                Go to app →
              </a>
            </div>

            <div
              style={{
                marginTop: "auto",
                borderRadius: "0 0 16px 16px",
                overflow: "hidden",
                height: "200px",
                margin: "0 -24px -0 -24px",
              }}
            >
              <img
                src="/images/random-jokes.png"
                alt="Random Jokes Project"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#dcfce7",
              borderRadius: "16px",
              padding: "24px 24px 0 24px",
              width: "50%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: "#111827",
                marginBottom: "12px",
              }}
            >
              Are you bored?
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#4b5563",
                marginBottom: "16px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
            </p>

            <div style={{ marginBottom: "16px" }}>
              <span
                style={{
                  backgroundColor: "white",
                  color: "#059669",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  marginRight: "8px",
                }}
              >
                react
              </span>
              <span
                style={{
                  backgroundColor: "white",
                  color: "#059669",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  marginRight: "8px",
                }}
              >
                vercel
              </span>
              <span
                style={{
                  backgroundColor: "white",
                  color: "#059669",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "12px",
                }}
              >
                axios
              </span>
              <span
                style={{
                  backgroundColor: "white",
                  color: "#059669",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "12px",
                }}
              >
                router
              </span>
              <span
                style={{
                  backgroundColor: "white",
                  color: "#059669",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "12px",
                }}
              >
                redux
              </span>
            </div>

            <div style={{ marginBottom: "60px" }}>
              <a
                href="#"
                style={{
                  fontSize: "14px",
                  color: "#111827",
                  marginRight: "16px",
                }}
              >
                View on Github
              </a>
              <a href="#" style={{ fontSize: "14px", color: "#111827" }}>
                Go to app →
              </a>
            </div>

            <div
              style={{
                marginTop: "auto",
                borderRadius: "0 0 16px 16px",
                overflow: "hidden",
                height: "200px",
                margin: "0 -24px -0 -24px",
              }}
            >
              <img
                src="/images/journey.png"
                alt="Are you bored Project"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects
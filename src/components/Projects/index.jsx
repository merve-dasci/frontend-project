import content from '../../data/content.json'

const Projects = () => {

  return (
    <section 
      className="bg-white dark:bg-gray-800"
      style={{
        padding: "4rem 2rem",
        textAlign: "center",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      <div style={{ 
        maxWidth: "1440px", 
        width: "100%",
        height: "700px", 
        margin: "0 auto",
        minWidth: "320px" 
      }}>
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

        <div style={{ 
          display: "flex", 
          gap: "2rem", 
          height: "600px",
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
         
          <div
            className="bg-blue-100 dark:bg-gray-700"
            style={{
              borderRadius: "16px",
              padding: "24px 24px 0 24px",
              width: "calc(50% - 1rem)",
              minWidth: "300px",
              maxWidth: "600px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3
              className="text-gray-900 dark:text-white"
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                marginBottom: "12px",
              }}
            >
              {content.projects.items[0].title}
            </h3>
            <p
              className="text-gray-600 dark:text-white"
              style={{
                fontSize: "14px",
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
                href={content.projects.items[0]?.links?.github || "#"}
                target="_blank"
                className="text-gray-900 dark:text-white"
                style={{
                  fontSize: "14px",
                  marginRight: "16px",
                }}
              >
                View on Github
              </a>
              <a href="#" className="text-gray-900 dark:text-white" style={{ fontSize: "14px" }}>
                Go to app →
              </a>
            </div>

            <div
              style={{
                marginTop: "auto",
                borderRadius: "0 0 16px 16px",
                overflow: "hidden",
                height: "320px",
                margin: "0 -24px -0 -24px",
                position: "relative",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/images/laptop.png"
                alt="Pizza Challenge Project"
                style={{ 
                  width: "100%", 
                  height: "auto",
                  maxHeight: "100%",
                  objectFit: "contain",
                  position: "relative"
                }}
              />
              <img
                src="/images/random-jokes.png"
                alt="Random Jokes App"
                style={{
                  position: "absolute",
                  top: "45%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "180px",
                  height: "110px",
                  objectFit: "cover",
                  borderRadius: "3px",
                }}
              />
            </div>
          </div>

          <div
            className="bg-green-100 dark:bg-green-900"
            style={{
              borderRadius: "16px",
              padding: "24px 24px 0 24px",
              width: "calc(50% - 1rem)",
              minWidth: "300px",
              maxWidth: "600px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3
              className="text-gray-900 dark:text-white"
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                marginBottom: "12px",
              }}
            >
              {content.projects.items[1].title}
            </h3>
            <p
              className="text-gray-600 dark:text-white"
              style={{
                fontSize: "14px",
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
                href={content.projects.items[1]?.links?.github || "#"}
                target="_blank"
                className="text-gray-900 dark:text-white"
                style={{
                  fontSize: "14px",
                  marginRight: "16px",
                }}
              >
                View on Github
              </a>
              <a 
                href={content.projects.items[1]?.links?.demo || "#"}
                target="_blank"
                className="text-gray-900 dark:text-white"
                style={{ fontSize: "14px" }}
              >
                Go to app →
              </a>
            </div>

            <div
              style={{
                marginTop: "auto",
                borderRadius: "0 0 16px 16px",
                overflow: "hidden",
                height: "320px",
                margin: "0 -24px -0 -24px",
                position: "relative",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/images/laptop.png"
                alt="Portfolio Project"
                style={{ 
                  width: "100%", 
                  height: "auto",
                  maxHeight: "100%",
                  objectFit: "contain",
                  position: "relative"
                }}
              />
              <img
                src="/images/random-jokes.png"
                alt="Random Jokes App"
                style={{
                  position: "absolute",
                  top: "45%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "180px",
                  height: "110px",
                  objectFit: "cover",
                  borderRadius: "3px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects
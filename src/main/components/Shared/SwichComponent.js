import { useState } from "react";
import AdFormatPublisherCard from "../Home/AdFormatPublisherCard";
import AdFormatAdvertiserCard from "../Home/AdFormatAdvertiserCard";

const SwichComponent = () => {
  const [contentAdvertiser, setContentAdvertiser] = useState(true);
  const [contentPublisher, setContentPublisher] = useState(false);
  return (
    <>
      <div className="container-fluid ">
        <div className="row mt-3 ">
          <div className="col-md-12">
            <h1 className="text-center font-semibold text-black">
              We deliver{" "}
              <span style={{ color: "#71065D" }}>high-converting ads</span> and
              traffic
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div>
              <div className="container  py-4  ">
                <div className="px-md-5 justify-content-center d-flex row ">
                  <div
                    class="col-md-6 justify-content-center "
                    style={{
                      padding: "0px !important",
                      margin: "0px !important",
                      border: "1px solid rgb(203 213 225)",
                      borderRadius: "28px",
                    }}
                  >
                    <div className="row  justify-content-center align-items-center">
                      <div
                        className="col-md-6 justify-content-center  align-items-center "
                        onClick={() => {
                          setContentAdvertiser(true);
                          setContentPublisher(false);
                        }}
                        style={{
                          cursor: "pointer",
                          backgroundColor: contentAdvertiser
                            ? "black"
                            : "white",
                          color: contentAdvertiser ? "white" : "black",
                          borderTopLeftRadius: "28px",
                          borderBottomLeftRadius: "28px",
                          borderTopRightRadius: "28px",
                          borderBottomRightRadius: "28px",
                        }}
                      >
                        <div
                          className="d-flex align-items-center mt-3 mb-2 justify-content-center"
                          style={{}}
                        >
                          <div>
                            <h3 className="font-semibold text-center">
                              Advertisers
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-md-6 "
                        onClick={() => {
                          setContentAdvertiser(false);
                          setContentPublisher(true);
                        }}
                        style={{
                          cursor: "pointer",
                          backgroundColor: contentPublisher ? "black" : "white",
                          color: contentPublisher ? "white" : "black",
                          borderTopRightRadius: "28px",
                          borderBottomRightRadius: "28px",
                          borderTopLeftRadius: "28px",
                          borderBottomLeftRadius: "28px",
                        }}
                      >
                        <div
                          className="d-flex align-items-center mt-3 mb-2 justify-content-center"
                          style={{}}
                        >
                          <div>
                            <h3 className="font-semibold text-center">
                              Publisher
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {contentAdvertiser ? (
                    <>
                      <AdFormatAdvertiserCard />
                    </>
                  ) : (
                    <>
                      <AdFormatPublisherCard />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SwichComponent;

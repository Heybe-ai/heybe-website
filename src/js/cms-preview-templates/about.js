import React from "react";

export default class AboutPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    
    return <div className="ph3 bg-off-white">
      <div className="mw7 center">
        <h1 className="f2 lh-title b mb3">{entry.getIn(["data", "title"])}</h1>
        <div className="flex-l mhn1-l">
          <div className="w-100">
            <img src={getAsset(entry.getIn(["data", "image"]))} alt="" className="db mb3"/>
          </div>
        </div>
      </div>

      <div className="mw7 center">
        <div className="mw6">
          <h2 className="f2 b lh-title mb2">{entry.getIn(["data", "intro", "heading"])}</h2>
          <p>{entry.getIn(["data", "intro", "text"])}</p>
        </div>
      </div>

      <div className="mw7 center pt4">
        <div className="flex-ns mhn2-ns mb3">
          <div className="ph2-ns w-50-ns">
            <h3 className="f3 b lh-title mb2">{entry.getIn(["data", "mission", "heading"])}</h3>
            <p>{entry.getIn(["data", "mission", "text"])}</p>
          </div>
          <div className="ph2-ns w-50-ns">
            <h3 className="f3 b lh-title mb2">{entry.getIn(["data", "vision", "heading"])}</h3>
            <p>{entry.getIn(["data", "vision", "text"])}</p>
          </div>
        </div>
      </div>

      <div className="mw7 center pt4">
        <h2 className="f2 b lh-title mb3">{entry.getIn(["data", "team", "heading"])}</h2>
        <div className="flex-ns flex-wrap mhn2-ns mb3">
          {(entry.getIn(["data", "team", "members"]) || []).map((member, i) => <div className="ph2-ns w-50-ns mb4" key={i}>
            <div className="bg-white br3 pa3 shadow-5">
              <img src={getAsset(member.get("image"))} alt={member.get("name")} className="db w-100 br3 mb3"/>
              <h3 className="f4 b lh-title mb2">{member.get("name")}</h3>
              <p className="f6 gray">{member.get("role")}</p>
              <p className="mb3">{member.get("bio")}</p>
              <div className="flex">
                <a href={member.get("linkedin")} target="_blank" className="link mr3">LinkedIn</a>
                <a href={member.get("github")} target="_blank" className="link mr3">GitHub</a>
                <a href={`mailto:${member.get("email")}`} className="link">Email</a>
              </div>
            </div>
          </div>)}
        </div>
      </div>

      <div className="mw7 center pt4">
        <h2 className="f2 b lh-title mb3">{entry.getIn(["data", "principles", "heading"])}</h2>
        <div className="flex-ns flex-wrap mhn2-ns">
          {(entry.getIn(["data", "principles", "values"]) || []).map((value, i) => <div className="ph2-ns w-50-ns mb4" key={i}>
            <h3 className="f4 b lh-title mb2">{value.get("heading")}</h3>
            <p>{value.get("text")}</p>
          </div>)}
        </div>
      </div>

      <div className="mw7 center pt4 pb4">
        <h2 className="f2 b lh-title mb3">{entry.getIn(["data", "contact", "heading"])}</h2>
        <div className="measure-narrow">
          <p>{entry.getIn(["data", "contact", "text"])}</p>
          <div className="mb3">
            <a href={`mailto:${entry.getIn(["data", "contact", "email"])}`} className="btn raise">Email us</a>
          </div>
          <p className="f6">{entry.getIn(["data", "contact", "location"])}</p>
        </div>
      </div>
    </div>;
  }
} 
import { useState } from "react";
import Button from "../../../components/button/component";
import DateC from "../../../components/date/component";
import Input from "../../../components/input/component";
import Radio from "../../../components/radio/component";
import Select from "../../../components/select/component";
import TextArea from "../../../components/textarea/component";
import Title from "../../../components/title/component";
import axios from "axios";
import {useParams} from "react-router-dom"
import "./home.css";
import { useEffect } from "react";
import DBURL from "../../config";

export default function Home() {

  //Departments
  const [departments, setDepartments] = useState([
    "EEE",
    "ECE",
    "AIDS",
    "CSE",
    "MECH",
    "Others",
  ]);

  //data
  const [id, setId] = useState("");
  const [name, setName] = useState();
  const [dpt, setDpt] = useState(departments[0]);
  const [date, setDate] = useState({
    from: "",
    to: "",
  });

  const [reason, setReason] = useState("");
  const [reasonOption, setReasonOption] = useState("Resignation");

  const [acceptance, setAcceptance] = useState("");
  const [acceptanceOption, setAcceptanceOption] = useState("no");

  const [presentTitle, setPresentTitle] = useState();
  const [newTitle, setNewTitle] = useState();
  const [salary, setSalary] = useState();
  const [newSalary, setNewSalary] = useState();
  const [fridgeBenifits, setFridgeBenifits] = useState();

  //questions
  const [question1, setQuestion1] = useState("");
  const [q1Sub, setQ1Sub] = useState("");

  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [question4, setQuestion4] = useState("");
  const [question5, setQuestion5] = useState("");

  const [question6, setQuestion6] = useState("");
  const [q6Option, setQ6Option] = useState();

  const [question7, setQuestion7] = useState("");
  const [question8, setQuestion8] = useState("");
  const [question9, setQuestion9] = useState("");
  const [question10, setQuestion10] = useState("");
  const [question11, setQuestion11] = useState("");
  const [question12, setQuestion12] = useState("");
  const [question13, setQuestion13] = useState("");

  const [question14a, setQuestion14a] = useState("");
  const [question14b, setQuestion14b] = useState("");
  const [question14c, setQuestion14c] = useState("");
  const [question14d, setQuestion14d] = useState("");
  const [question14e, setQuestion14e] = useState("");
  const [question14f, setQuestion14f] = useState("");

  const [question15, setQuestion15] = useState("");

  const [question16, setQuestion16] = useState("");
  const [q16Option, setQ16Option] = useState();

  const [question17, setQuestion17] = useState("");
  const [question18, setQuestion18] = useState("");


  //submit method
  const submitHandler = async () => {
    console.log("submit");

    //log the data
    const data = {
      id,
      name,
      dpt,
      date,
      reason: { reason, reasonOption },
      acceptance: { acceptance, acceptanceOption },
      presentTitle,
      newTitle,
      salary,
      newSalary,
      fridgeBenifits,
      questions: {
        question1: {
          question1,
          q1Sub,
        },
        question2,
        question3,
        question4,
        question5,
        question6: {
          reson: question6,
          option: q6Option,
        },
        question7,
        question8,
        question9,
        question10,
        question11,
        question12,
        question13,
        question14: {
          JobResponsibilities: question14a,
          Opportunities: question14b,
          environment: question14c,
          supervisor: question14d,
          pay: question14e,
          benifits: question14f,
        },
        question15,
        question16: {
          reason: question16,
          option: q16Option,
        },
        question17,
        question18,
      },
    };
    console.log(data);

    const url = DBURL + "/api.v1/form/saveData";
    axios.post(url, {
      data: data
    }).then(response => {
      window.location.href = "/submitted";
    })

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  };

  //radio selection function
  const selectHandler = (e, setState) => {
    setState(e.target.value);
  };
  
  const {formId} = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(formId)
        const response = await axios.get(
          `${DBURL}/api.v1/form/getInduvidualData/${formId}`, {
            token: window.localStorage.getItem("token") 
          }
        );
        const data = response.data.data;
        console.log(data.data.date.from)

        setId(data.data.id || "");
        setName(data.data.name || "");
        setDpt(data.data.dpt || departments[0]);
        setDate({
          from: data.data.date?.from || "",
          to: data.data.date?.to || "",
        });
        console.log(date)

        setReason(data.data.reason?.reason || "");
        setReasonOption(data.data.reason?.reasonOption || "Resignation");

        setAcceptance(data.data.acceptance?.acceptance || "");
        setAcceptanceOption(data.data.acceptance?.acceptanceOption || "No");

        setPresentTitle(data.data.presentTitle || "");
        setNewTitle(data.data.newTitle || "");
        setSalary(data.data.salary || "");
        setNewSalary(data.data.newSalary || "");
        setFridgeBenifits(data.data.fridgeBenifits || "");

        setQuestion1(data.data.questions?.question1?.question1 || "");
        setQ1Sub(data.data.questions?.question1?.q1Sub || "");

        setQuestion2(data.data.questions?.question2 || "");
        setQuestion3(data.data.questions?.question3 || "");
        setQuestion4(data.data.questions?.question4 || "");
        setQuestion5(data.data.questions?.question5 || "");

        setQuestion6(data.data.questions?.question6?.reson || "");
        setQ6Option(data.data.questions?.question6?.option || "");

        setQuestion7(data.data.questions?.question7 || "");
        setQuestion8(data.data.questions?.question8 || "");
        setQuestion9(data.data.questions?.question9 || "");
        setQuestion10(data.data.questions?.question10 || "");
        setQuestion11(data.data.questions?.question11 || "");
        setQuestion12(data.data.questions?.question12 || "");
        setQuestion13(data.data.questions?.question13 || "");

        setQuestion14a(
          data.data.questions?.question14?.JobResponsibilities || ""
        );
        setQuestion14b(data.data.questions?.question14?.Opportunities || "");
        setQuestion14c(data.data.questions?.question14?.environment || "");
        setQuestion14d(data.data.questions?.question14?.supervisor || "");
        setQuestion14e(data.data.questions?.question14?.pay || "");
        setQuestion14f(data.data.questions?.question14?.benifits || "");

        setQuestion15(data.data.questions?.question15 || "");

        setQuestion16(data.data.questions?.question16?.reason || "");
        setQ16Option(data.data.questions?.question16?.option || "");

        setQuestion17(data.data.questions?.question17 || "");
        setQuestion18(data.data.questions?.question18 || "");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if(formId){
      fetchData();
    }

  }, []);


  return (
    <div className="container">
      {
        formId ? (
          <button className="btn outline pos" onClick={() => window.location.href="/admin"}>Back</button>
        ) : null
      }
      <Title title="VIIT Exit Form" />
      <div className="wrapper">
        <div className="section">
          <Input 
            disabled={false}
            label={"Employee ID"}
            value={id}
            setValue={setId}
            placeholder={"Enter Employee ID"}
            show={true}
          />
          <Input 
            disabled={false}
            label={"Employee's Name"}
            value={name}
            setValue={setName}
            placeholder={"Enter Fullname"}
            show={true}
          />
        </div>

        <div className="section">
          <Select
            label={"Department"}
            options={departments}
            name={"department"}
            setValue={setDpt}
          />
          <DateC
            label={"Employed from"}
            value={date}
            setValue={setDate}
            placeholder={"Enter Fullname"}
          />
        </div>

        <div className="radioWrap">
          <p className="lab">Reason for Leaving</p>
          <div className="section rd">
            <Radio
              label={"Resignation"}
              value={"Resignation"}
              callback={selectHandler}
              category={"cat1"}
              state={reasonOption}
              setState={setReasonOption}
            />
            <Radio
              label={"Discharge"}
              value={"Discharge"}
              callback={selectHandler}
              category={"cat1"}
              state={reasonOption}
              setState={setReasonOption}
            />
            <Radio
              label={"Layoff"}
              value={"Layoff"}
              callback={selectHandler}
              category={"cat1"}
              state={reasonOption}
              setState={setReasonOption}
            />
            <Radio
              label={"Other"}
              value={"Other"}
              callback={selectHandler}
              category={"cat1"}
              state={reasonOption}
              setState={setReasonOption}
            />
            <Input 
              disabled={reasonOption == "Other" ? false : true}
              label={""}
              value={reason}
              setValue={setReason}
              placeholder={"Any other reason"}
            />
          </div>
        </div>

        <div className="radioWrap">
          <p className="lab">Have you accepted another position?</p>
          <div className="section rd">
            <Radio
              label={"Yes"}
              value={"Yes"}
              callback={selectHandler}
              category={"cat2"}
              state={acceptanceOption}
              setState={setAcceptanceOption}
            />
            <Radio
              label={"No"}
              value={"No"}
              callback={selectHandler}
              category={"cat2"}
              state={acceptanceOption}
              setState={setAcceptanceOption}
            />
            <Input 
              disabled={acceptanceOption == "Yes" ? false: true}
              label={""}
              value={acceptance}
              setValue={setAcceptance}
              placeholder={"If Yes, Where?"}
            />
          </div>
        </div>

        <div className="section">
          <Input 
            disabled={false}
            label={"Present Title"}
            value={presentTitle}
            setValue={setPresentTitle}
            placeholder={"Enter Present Title"}
            show={true}
          />
          <Input 
            disabled={false}
            label={"New Title"}
            value={newTitle}
            setValue={setNewTitle}
            placeholder={"Enter New Title"}
            show={true}
          />
        </div>

        <div className="section">
          <Input 
            disabled={false}
            label={"Present Salary"}
            value={salary}
            setValue={setSalary}
            placeholder={"$25000"}
            show={true}
          />
          <Input 
            disabled={false}
            label={"New Salary"}
            value={newSalary}
            setValue={setNewSalary}
            placeholder={"$40000"}
            show={true}
          />
        </div>

        <div className="section rd">
          <TextArea
            label={"Additional Fridge benifits offered by new employer"}
            value={fridgeBenifits}
            setValue={setFridgeBenifits}
            disabled={false}
          />
        </div>

        <div className="section rd">
          <Input 
            disabled={false}
            label={
              "1. How long ago did you begin searching for another position?"
            }
            value={question1}
            setValue={setQuestion1}
            placeholder={"ex: 1 week"}
            show={true}
          />
        </div>

        <div className="section rd">
          <TextArea
            label={
              "What incident or circumstance(s) made you begin looking for another job?"
            }
            value={q1Sub}
            setValue={setQ1Sub}
            disabled={false}
          />
        </div>

        <div className="section rd">
          <TextArea
            label={
              "2. What were the reasons you decided your career goals could not be met here or could be better met somewhere else?"
            }
            value={question2}
            setValue={setQuestion2}
            disabled={false}
          />
        </div>

        <div className="radioWrap">
          <p className="lab">
            3. Did you speak with your supervisor or anyone else in management
            or the Administration Office concerning your career goals?
          </p>
          <div className="section rd">
            <Radio
              label={"Yes"}
              value={"yes"}
              callback={selectHandler}
              category={"cat3"}
              state={question3}
              setState={setQuestion3}
            />
            <Radio
              label={"No"}
              value={"no"}
              callback={selectHandler}
              category={"cat3"}
              state={question3}
              setState={setQuestion3}
            />
          </div>
        </div>

        <div className="section rd">
          <TextArea
            label={
              "4. If the answer to 3 above was Yes, what was the outcome of this conversation?"
            }
            value={question4}
            setValue={setQuestion4}
            disabled={question3 == "yes" ? false : true}
          />
        </div>

        <div className="section rd">
          <TextArea
            label={"5. If the answer to 3 above was No, why not? "}
            value={question5}
            setValue={setQuestion5}
            disabled={question3 == "no" ? false : true}
          />
        </div>

        <div className="radioWrap">
          <p className="lab">6. Did you get along well with your supervisor?</p>
          <div className="section rd">
            <Radio
              label={"Yes"}
              value={"Yes"}
              callback={selectHandler}
              category={"cat4"}
              state={q6Option}
              setState={setQ6Option}
            />
            <Radio
              label={"No"}
              value={"No"}
              callback={selectHandler}
              category={"cat4"}
              state={q6Option}
              setState={setQ6Option}
            />
            <Input 
              disabled={q6Option == "No" ? false : true}
              label={""}
              value={question6}
              setValue={setQuestion6}
              placeholder={"If No, please explain: "}
            />
          </div>
        </div>

        <div className="section rd">
          <TextArea
            label={
              "7.	How well did your supervisor handle any complaints or grievances you may have had?"
            }
            value={question7}
            setValue={setQuestion7}
            disabled={false}
          />
        </div>

        <div className="section rd">
          <TextArea
            label={
              "8.	What could have been done to make your job here more rewarding? "
            }
            value={question8}
            setValue={setQuestion8}
            disabled={false}
          />
        </div>

        <div className="section rd">
          <TextArea
            label={"9. What did you like best about your job?"}
            disabled={false}
            value={question9}
            setValue={setQuestion9}
          />
        </div>

        <div className="section rd">
          <TextArea
            label={"10.	What did you dislike about your job?"}
            disabled={false}
            value={question10}
            setValue={setQuestion10}
          />
        </div>

        <div className="section rd">
          <TextArea
            label={
              "11.	What makes the Vignan’s Institute of Information Technology a good place to work? "
            }
            value={question11}
            setValue={setQuestion11}
            disabled={false}
          />
        </div>

        <div className="section rd">
          <TextArea
            label={
              "12.	What makes the Vignan’s Institute of Information Technology a poor place to work? "
            }
            value={question12}
            setValue={setQuestion12}
            disabled={false}
          />
        </div>

        <div className="section rd">
          <TextArea
            label={
              "13.	How does your new position compare with the one you are leaving? "
            }
            disabled={false}
            value={question13}
            setValue={setQuestion13}
          />
        </div>

        <div className="radioWrap">
          <p className="lab">14. How would you rate the following:</p>
          <div className="section rd opt">
            <p className="lab rdhead">A. Job responsibilities: </p>
            <div className="radioWrap">
              <Radio
                label={"Outstanding"}
                value={"Outstanding"}
                callback={selectHandler}
                category={"jr"}
                state={question14a}
                setState={setQuestion14a}
              />
              <Radio
                label={"Very Good"}
                value={"Very Good"}
                callback={selectHandler}
                category={"jr"}
                state={question14a}
                setState={setQuestion14a}
              />
              <Radio
                label={"Satisfactory"}
                value={"Satisfactory"}
                callback={selectHandler}
                category={"jr"}
                state={question14a}
                setState={setQuestion14a}
              />
              <Radio
                label={"Fair"}
                value={"Fair"}
                callback={selectHandler}
                category={"jr"}
                state={question14a}
                setState={setQuestion14a}
              />
              <Radio
                label={"Unsatisfactory"}
                value={"Unsatisfactory"}
                callback={selectHandler}
                category={"jr"}
                state={question14a}
                setState={setQuestion14a}
              />
            </div>
          </div>

          <div className="section rd opt">
            <p className="lab rdhead">B. Opportunity for achieving goals: </p>
            <div className="radioWrap">
              <Radio
                label={"Outstanding"}
                value={"Outstanding"}
                callback={selectHandler}
                category={"or"}
                state={question14b}
                setState={setQuestion14b}
              />
              <Radio
                label={"Very Good"}
                value={"Very Good"}
                callback={selectHandler}
                category={"or"}
                state={question14b}
                setState={setQuestion14b}
              />
              <Radio
                label={"Satisfactory"}
                value={"Satisfactory"}
                callback={selectHandler}
                category={"or"}
                state={question14b}
                setState={setQuestion14b}
              />
              <Radio
                label={"Fair"}
                value={"Fair"}
                callback={selectHandler}
                category={"or"}
                state={question14b}
                setState={setQuestion14b}
              />
              <Radio
                label={"Unsatisfactory"}
                value={"Unsatisfactory"}
                callback={selectHandler}
                category={"or"}
                state={question14b}
                setState={setQuestion14b}
              />
            </div>
          </div>

          <div className="section rd opt">
            <p className="lab rdhead">C. Work environment: </p>
            <div className="radioWrap">
              <Radio
                label={"Outstanding"}
                value={"Outstanding"}
                callback={selectHandler}
                category={"we"}
                state={question14c}
                setState={setQuestion14c}
              />
              <Radio
                label={"Very Good"}
                value={"Very Good"}
                callback={selectHandler}
                category={"we"}
                state={question14c}
                setState={setQuestion14c}
              />
              <Radio
                label={"Satisfactory"}
                value={"Satisfactory"}
                callback={selectHandler}
                category={"we"}
                state={question14c}
                setState={setQuestion14c}
              />
              <Radio
                label={"Fair"}
                value={"Fair"}
                callback={selectHandler}
                category={"we"}
                state={question14c}
                setState={setQuestion14c}
              />
              <Radio
                label={"Unsatisfactory"}
                value={"Unsatisfactory"}
                callback={selectHandler}
                category={"we"}
                state={question14c}
                setState={setQuestion14c}
              />
            </div>
          </div>

          <div className="section rd opt">
            <p className="lab rdhead">D. Supervisor: </p>
            <div className="radioWrap">
              <Radio
                label={"Outstanding"}
                value={"Outstanding"}
                callback={selectHandler}
                category={"spr"}
                state={question14d}
                setState={setQuestion14d}
              />
              <Radio
                label={"Very Good"}
                value={"Very Good"}
                callback={selectHandler}
                category={"spr"}
                state={question14d}
                setState={setQuestion14d}
              />
              <Radio
                label={"Satisfactory"}
                value={"Satisfactory"}
                callback={selectHandler}
                category={"spr"}
                state={question14d}
                setState={setQuestion14d}
              />
              <Radio
                label={"Fair"}
                value={"Fair"}
                callback={selectHandler}
                category={"spr"}
                state={question14d}
                setState={setQuestion14d}
              />
              <Radio
                label={"Unsatisfactory"}
                value={"Unsatisfactory"}
                callback={selectHandler}
                category={"spr"}
                state={question14d}
                setState={setQuestion14d}
              />
            </div>
          </div>

          <div className="section rd opt">
            <p className="lab rdhead">E. Pay: </p>
            <div className="radioWrap">
              <Radio
                label={"Outstanding"}
                value={"Outstanding"}
                callback={selectHandler}
                category={"py"}
                state={question14e}
                setState={setQuestion14e}
              />
              <Radio
                label={"Very Good"}
                value={"Very Good"}
                callback={selectHandler}
                category={"py"}
                state={question14e}
                setState={setQuestion14e}
              />
              <Radio
                label={"Satisfactory"}
                value={"Satisfactory"}
                callback={selectHandler}
                category={"py"}
                state={question14e}
                setState={setQuestion14e}
              />
              <Radio
                label={"Fair"}
                value={"Fair"}
                callback={selectHandler}
                category={"py"}
                state={question14e}
                setState={setQuestion14e}
              />
              <Radio
                label={"Unsatisfactory"}
                value={"Unsatisfactory"}
                callback={selectHandler}
                category={"py"}
                state={question14e}
                setState={setQuestion14e}
              />
            </div>
          </div>

          <div className="section rd opt">
            <p className="lab rdhead">F. Benefits: </p>
            <div className="radioWrap">
              <Radio
                label={"Outstanding"}
                value={"Outstanding"}
                callback={selectHandler}
                category={"bn"}
                state={question14f}
                setState={setQuestion14f}
              />
              <Radio
                label={"Very Good"}
                value={"Very Good"}
                callback={selectHandler}
                category={"bn"}
                state={question14f}
                setState={setQuestion14f}
              />
              <Radio
                label={"Satisfactory"}
                value={"Satisfactory"}
                callback={selectHandler}
                category={"bn"}
                state={question14f}
                setState={setQuestion14f}
              />
              <Radio
                label={"Fair"}
                value={"Fair"}
                callback={selectHandler}
                category={"bn"}
                state={question14f}
                setState={setQuestion14f}
              />
              <Radio
                label={"Unsatisfactory"}
                value={"Unsatisfactory"}
                callback={selectHandler}
                category={"bn"}
                state={question14f}
                setState={setQuestion14f}
              />
            </div>
          </div>
        </div>

        <div className="section rd">
          <TextArea
            label={
              "15.	What recommendations would you have for making your department and/or the Town a better place to work?"
            }
            value={question15}
            setValue={setQuestion15}
            disabled={false}
          />
        </div>

        <div className="radioWrap">
          <p className="lab">
            16. Would you have stayed if a more-satisfactory arrangement could
            have been worked out?
          </p>
          <div className="section rd">
            <Radio
              label={"Yes"}
              value={"Yes"}
              callback={selectHandler}
              category={"cat16"}
              state={q16Option}
              setState={setQ16Option}
            />
            <Radio
              label={"No"}
              value={"No"}
              callback={selectHandler}
              category={"cat16"}
              state={q16Option}
              setState={setQ16Option}
            />
            <Input 
              disabled={q16Option == "Yes" ? false: true}
              label={""}
              value={question16}
              setValue={setQuestion16}
              placeholder={"If yes, explain: "}
            />
          </div>
        </div>

        <div className="radioWrap">
          <p className="lab">
            17. It has been explained to me that completion of this Exit
            Interview form is voluntary and I was given the option not to
            complete this form if I so desired.
          </p>
          <div className="section rd">
            <Radio
              label={"Yes"}
              value={"Yes"}
              callback={selectHandler}
              category={"cat17"}
              state={question17}
              setState={setQuestion17}
            />
            <Radio
              label={"No"}
              value={"No"}
              callback={selectHandler}
              category={"cat17"}
              state={question17}
              setState={setQuestion17}
            />
          </div>
        </div>

        <div className="radioWrap">
          <p className="lab">
            18. I authorize the placement of this Exit Interview form in my
            personnel file:
          </p>
          <div className="section rd">
            <Radio
              label={"Yes"}
              value={"Yes"}
              callback={selectHandler}
              category={"cat18"}
              state={question18}
              setState={setQuestion18}
            />
            <Radio
              label={"No"}
              value={"No"}
              callback={selectHandler}
              category={"cat18"}
              state={question18}
              setState={setQuestion18}
            />
          </div>
        </div>

        {
          formId == undefined ? (
            <div className="section">
              <Button label={"Submit"} callback={submitHandler} />
            </div>
          ) : null
        }
      </div>
    </div>
  );
}


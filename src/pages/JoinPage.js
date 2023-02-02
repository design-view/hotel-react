import React,{useState} from 'react';
import PopupDom from '../components/PopupDom';
import PopupPostCode from '../components/PopupPostCode';
import Title from '../components/Title';

const JoinPage = () => {
    //우편번호 관리하기
    const onAddData = (data) => {
        console.log(data);
        setFormData({
            ...formData,
            m_add1:data.address
        });
    }
    // 팝업창 상태 관리
    const [isPopupOpen, setIsPopupOpen] = useState(false)
	// 팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true)
    }
	// 팝업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false)
    }
    const [ formData, setFormData ] = useState({
        m_name:"",
        m_pass:"",
        m_passch:"",
        m_nickname:"",
        m_email:"",
        m_phone:"",
        m_add1:"",
        m_add2:""
    })
    const onChange = (e) => {
        const { name,  value } = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
        console.log(name, value);
    }
    return (
        <div>
            <Title title="Join"/>
            <form>
             <table>
                <tbody>
                    <tr>
                        <td>이름</td>
                        <td><input name="m_name" value={formData.m_name} required onChange={onChange}/></td>
                    </tr>
                    <tr>
                        <td>별명</td>
                        <td><input name="m_nickname" value={formData.m_nickname} onChange={onChange} required/></td>
                    </tr>
                    <tr>
                        <td>아이디(이메일형식)</td>
                        <td><input name="m_email" value={formData.m_email} onChange={onChange} required/></td>
                    </tr>
                    <tr>
                        <td>패스워드</td>
                        <td><input name="m_pass" value={formData.m_pass} onChange={onChange} required/></td>
                    </tr>
                    <tr>
                        <td>패스워드확인</td>
                        <td><input name="m_passch" value={formData.m_passch} onChange={onChange} required/></td>
                    </tr>
                    <tr>
                        <td>연락처</td>
                        <td><input name="m_phone" value={formData.m_phone}  onChange={onChange} required/></td>
                    </tr>
                    <tr>
                        <td>주소</td>
                        <td>
                            <input name="m_add1" value={formData.m_add1} required onChange={onChange}/>
                            <input name="m_add2" value={formData.m_add2} onChange={onChange} />
                            <button type='button' onClick={openPostCode}>우편번호 검색</button>
                                <div id='popupDom'>
                                {isPopupOpen && (
                                    <PopupDom>
                                      <PopupPostCode onClose={closePostCode} onAddData={onAddData}  />
                                    </PopupDom>
                                )}
                            </div>
                        </td>
                    </tr>
                    
                       
                    
                </tbody>
             </table>
            </form>
        </div>
    );
};

export default JoinPage;
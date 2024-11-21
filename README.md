
<img src="https://github.com/design-view/hotel-react/blob/main/hotelimg/main.png" alt="배너" width="100%"/>
</a>

<br/>
<br/>

# 0. Getting Started (시작하기)
```bash
$ npm start
```

<br/>
<br/>

# 1. Project Overview (프로젝트 개요)
- 프로젝트 이름: 그린호텔
- 프로젝트 설명: 호텔예약시스템을 구현한 웹 어플리케이션 입니다.

<br/>
<br/>

# 2. Key Features (주요 기능)
- **회원가입**:
  - 회원가입 시 DB에 유저정보가 등록됩니다.

- **로그인**:
  - 사용자 인증 정보를 통해 로그인합니다.
  - 관리자 로그인 시 룸을 등록할 수 있습니다.
  - JWT를 사용하여 로그인을 합니다.

- **객실안내**:
  - 데이터베이스에 등록된 객실을  볼 수 있습니다.

- **객실예약**:
  - 날짜를 선택하여 원하는 객실을 예약 할 수 있습니다.
  - 예약이된 객실은 예약할 수 없습니다.
  - 예약이 완료되면 예약 테이블에 예약데이터가 등록됩니다.


<br/>
<br/>

# 3. Technology Stack (기술 스택)
## 3.1 Language
|  |  |
|-----------------|-----------------|
| HTML5    |<img src="https://github.com/user-attachments/assets/2e122e74-a28b-4ce7-aff6-382959216d31" alt="HTML5" width="100">| 
| CSS3    |   <img src="https://github.com/user-attachments/assets/c531b03d-55a3-40bf-9195-9ff8c4688f13" alt="CSS3" width="100">|
| Javascript    |  <img src="https://github.com/user-attachments/assets/4a7d7074-8c71-48b4-8652-7431477669d1" alt="Javascript" width="100"> | 

<br/>

## 3.2 Frotend
|  |  |  
|-----------------|-----------------|
| React    | 18.1.0    |
| antd    | 5.1.7   |
| axios    | 1.2.6  |
| react-redux     | 8.0.5    |
| redux    | 4.2.1    |
| redux-thunk    | 2.4.2    |
| styled-components    | 5.3.6    |
| web-vitals    | 2.1.4    |

<br/>

## 3.3 Backend
|  |  | 
|-----------------|-----------------|
| Node    | 10.12.5    |
| Express       | 4.18.2   |
| Mysql    | 2.18.1    |
| cors       | 2.8.5   |
| multer    | 1.4.5-lts.1    |
| bcrypt    | 5.1.0    |

<br/>

## 3.4 Cooperation
|  |  |
|-----------------|-----------------|
| Git    |  <img src="https://github.com/user-attachments/assets/483abc38-ed4d-487c-b43a-3963b33430e6" alt="git" width="100">    |


<br/>


## 명명 규칙
* 상수 : 영문 대문자 + 스네이크 케이스
```
const NAME_ROLE;
```
* 변수 & 함수 : 카멜케이스
```
// state
const [isLoading, setIsLoading] = useState(false);
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [errorMessage, setErrorMessage] = useState('');
const [currentUser, setCurrentUser] = useState(null);

// 배열 - 복수형 이름 사용
const datas = [];

// 정규표현식: 'r'로 시작
const = rName = /.*/;

// 이벤트 핸들러: 'on'으로 시작
const onClick = () => {};
const onChange = () => {};

// 반환 값이 불린인 경우: 'is'로 시작
const isLoading = false;

// Fetch함수: method(get, post, put, del)로 시작
const getEnginList = () => {...}
```

<br/>

## 블록 구문
```
// 한 줄짜리 블록일 경우라도 {}를 생략하지 않고, 명확히 줄 바꿈 하여 사용한다
// good
if(true){
  return 'hello'
}

// bad
if(true) return 'hello'
```

<br/>

## 함수
```
함수는 함수 표현식을 사용하며, 화살표 함수를 사용한다.
// Good
const fnName = () => {};

// Bad
function fnName() {};
```

<br/>



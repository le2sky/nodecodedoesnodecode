## Node Code Does Node Code

노드JS 디자인 패턴 책의 연습문제를 풀고 작성하는 공간입니다.😃

### 1. simpleEvent.js

입력 파일 리스트를 인자로 넘기고 find 프로세스를 시작할 때 이벤트를 방출하게끔 비동기적 FindRegex 클래스를 수정하세요.

### 2. ticker.js

number와 콜백을 인자로 받는 함수를 작성.
호출되고 나서 number 만큼의 밀리초가 지나기 전까지 매 50밀리초마다 tick이라는 이벤트를 내보내는 Eventemitter를 반환
이 함수는 number 만큼의 밀리초가 지났을 때 tick 이벤트가 일어난 횟수를 받는 callback을 호출

hint : setTimeout()을 예약하기 위해 setTimeout()을 재귀적으로 사용

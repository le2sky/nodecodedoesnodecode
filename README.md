## Node Code Does Node Code

노드JS 디자인 패턴 책의 연습문제를 풀고 작성하는 공간입니다.😃

### 1. simpleEvent.js

입력 파일 리스트를 인자로 넘기고 find 프로세스를 시작할 때 이벤트를 방출하게끔 비동기적 FindRegex 클래스를 수정하세요.

### 2. ticker.js

number와 콜백을 인자로 받는 함수를 작성.
호출되고 나서 number 만큼의 밀리초가 지나기 전까지 매 50밀리초마다 tick이라는 이벤트를 내보내는 Eventemitter를 반환
이 함수는 number 만큼의 밀리초가 지났을 때 tick 이벤트가 일어난 횟수를 받는 callback을 호출

hint : setTimeout()을 예약하기 위해 setTimeout()을 재귀적으로 사용

### 3. simpleModification.js

함수 호출 즉시 tick 이벤트를 생성하도록 ticker.js 함수를 수정

### 4. playingWithErros.js

3에서 추가한 초기 발생을 포함해서 tick이 발생할 때 타임스탬프가 5로 나누어지면 에러를 생성하도록 함수를 수정
콜백과 EventEmitter를 사용해서 에러를 전파시키세요.

TODO: 즉시 이벤트를 생성하는게 동기로 이벤트를 생성하는 것인지 모르겠음. 우선 비동기 이벤트를 발생하는 ticker 함수로 통일을 시켜놨음

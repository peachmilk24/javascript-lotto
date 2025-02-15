const Lotto = require("../src/Lotto");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능
  test("로또 번호는 1~45 사이의 정수여야 한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 100]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호는 1~45 사이의 정수여야 한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, -10]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호는 숫자여야 한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, "one"]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호는 숫자여야 한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, " "]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호는 숫자여야 한다.", () => {
    expect(() => {
      new Lotto(["1a"]);
    }).toThrow("[ERROR]");
  });
});

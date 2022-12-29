var tipuesearch = {"pages": [{'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'w5', 'text': 'password generator.py \n # 導入亂數模組\nimport random\n# 導入字串模組\nimport string\n# 利用 def 關鍵字定義函式\n# 函式的輸入變數可以設定初始值\ndef password_generator(size=4, chars=string.ascii_lowercase + string.digits):\n    # 函式內以多行註解說明函式功能\n    """Generate random password\n    """\n    # 利用 return 關鍵字將所產生的亂數字串傳回\n    return \'\'.join(random.choice(chars) for _ in range(size))\n# 建立一個變數與隨後的字串對應\npass_string = "abcdefghkmnpqrstuwxyz123456789"\n# 利用重複迴圈呼叫 password_generator() 函式 10 次\nfor i in range(10):\n    print(password_generator(4, pass_string)) \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '\n Fetch personal page \n from browser import document, html\n\nbrython_div1 = document["brython_div1"]\n"""\nbrython_div1 <= html.BUTTON("hello")\nbrython_div1 <= html.BR()\nbrython_div1 <= html.A("google", href="https://google.com")\n"""\n\nurl = "https://mde.tw/studlist/2022fall/1b.txt"\ndata = open(url).read().split("\\n")\nmdecp2022 = "https://mdecp2022.github.io/site-"\ndata = data[1:-1]\nfor i in data:\n    stud = i.split("\\t")\n    stud_num = stud[0]\n    github_acc = stud[1]\n    #print(stud_num, github_acc)\n    if github_acc == "":\n        github_acc = stud_num\n    site = mdecp2022 + github_acc\n    link = html.A(stud_num, href=site)\n    brython_div1 <= link\n    brython_div1 <= html.BR() \n \n random call \n import random\ncp1b = "0761"\n# 宣告 url 變數值為字串, 此字串為取得 cp2022 1a 選課成員名單\nurl = "https://nfu.cycu.org/?semester=1111&courseno=" + cp1b + "&column=True"\n# 利用上述已經宣告的 url 變數字串值, 作為 open() 函式的輸入變數, 可以連結至該網站\n# 連接 url 所代表字串的網站後, 再利用 read() 函式讀取該網站的內容, 即可取得 cp2022 1a 的選課成員學號\n# url 所屬的網站, 乃 69 中的一台虛擬主機 8/10ff-0-1-2, 並利用 Get 從教務主機取回課程註冊成員學號\n# 由於所取回的學號以跳行符號隔開, 因此取回的學號資料行, 再利用 split() 函式, 以 \\n 跳行符號分割後\n# 所對應到 data 的資料型別將會是數列\ndata = open(url).read().split("\\n")\n# 經過檢查 data 數列, 發現最後一個 element 為空字串, 因此利用 [:-1] 去掉數列的最後一個元素, -1 代表數列最後一個元素的索引\n#print(data[:-1])\n# 設定一個變數, 與修課成員學號數列對應\nstud = data[:-1]\n# 使用 random 模組中的 shuffle() 函式, 以隨機的方式排列 stud 數列內容\nrandom.shuffle(stud)\n# 設定 num 與 5 對應, 或將 5 整數值存入 num 變數所對應的記憶體位址\nnum = 5\n# 利用 for 重複迴圈與 range() 變數, 列印出 (利用 print() 函式) 已經隨機排列次序的 stud 數列的最前面 num 個學號值\nfor i in range(num):\n    print(stud[i])  \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w10', 'text': 'w10hw \n ==================== 以下為 w10 缺考名單: 41123201 41123218 41123225 41123228 41123229 41123234 41123236 41123239 41123240 41123243 41123245 41123246 41123250 \n # 導入 ast 模組是希望利用其 literal_eval() 將 dict 格式的字串轉為 dict 資料型別\n# 以利隨後的取值運算\nimport ast\n# 定義一個函式, 以班級代號字串作為輸入, 可以傳回各班修課學員的學號數列\ndef get_stud(c_name):\n    # 將課程的班級代號字串作為 dict 的 key, 而 2022 fall 的課程代號作為對應值\n    # 使用者可以利用班級代號從 courses dict 取出課程代號\n    courses = {"1a": "0747", "1b": "0761", "2a": "0773", "2b": "0786"}\n    # 利用 c_name 從 courses 得到該學期的課程代號\n    c = courses[c_name]\n    # 利用課程代號從學校教務主機取的該班修課人員名單\n    url = "https://nfu.cycu.org/?semester=1111&courseno=" + c + "&column=True"\n    # 讀出各修課人員資料後, 以跳行符號切割, 得到的 data 為數列\n    data = open(url).read().split("\\n")\n    # 因為最後一筆資料為空字串, 因此利用數列運算將其去除\n    stud = data[:-1]\n    # get_stud() 函式最後將對應班級的修課人員學號以數列格式傳回\n    return stud\n# 利用 "1b" 作為輸入從 get_stud() 取出該班修課學員學號數列\ncp_stud = get_stud("1b")\n# get w10 quiz result\n# # 以下為 1b w10 quiz 考試結果的 JSON 檔案\ncp_w10_quiz_url = "https://gist.githubusercontent.com/mdecycu/9df4b372ac1b7386cf259ced15f1a2b2/raw/a6825f13b1bb0b61e09e74dd117729eefe1d947f/20221110_cp1b_w10_quiz.json"\ndef get_score(url):\n    # 利用 open() 與 read() 讀取考試結果 JSON 檔案\n    json_data = open(url).read()\n    # 利用 ast.literal_eval() 將字串 dict, 轉為程式可用的 dict 資料型別\n    big_dict = ast.literal_eval(json_data)\n    # 從 big_dict 中, 取出 body 中的 testuser 欄位資料\n    data = big_dict["body"]["testuser"]\n    # 定義一個空 dict 資料變數, 隨後利用迴圈逐一將學號作為 key, 考試成績為 valude\n    # 組成 quiz_dict 的資料內容, 以便之後可以用學號當作輸入, 取得該員考試成績\n    quiz_dict = {}\n    for i in data:\n        # data 資料中的 user_name 為考試學員的帳號, 也就是學號\n        stud_id = data[i]["user_name"]\n        # data 資料中的 total_score 欄位為考試成績\n        # 因為考試成績為字串, 先轉為浮點數後, 再轉為整數\n        stud_score = int(float(data[i]["total_score"]))\n        # 逐一以學號為 key, 考試成績為對應 value, 將資料放入 quiz_dict\n        quiz_dict[stud_id] = stud_score\n    # 取得各學員的考試成績 quiz_dict 後, 將資料傳回\n    return quiz_dict\n# 從考試 JSON 檔案中取得考試結果的字典資料\ncp_quiz = get_score(cp_w10_quiz_url)\n# 設定一個空數列, 隨後將利用 append() 方法, 將缺考學員學號存入\ncp_abs = []\n# 從修課學員數列中, 逐一按照學號次序, 以重複迴圈將學號對應至 stud 變數\nfor stud in cp_stud:\n    # 因為缺考學員在考試結果的 dict 中並無資料, 因此利用 try except 進行判斷\n    try:\n        # 針對 stud 學號, 有考試成績者, 列出其學號與得分\n        print(stud, cp_quiz[stud])\n    except:\n        # 缺考者沒有 quiz 成績, 則在其成績欄位印出"缺"\n        print(stud, "缺")\n        # 同時將缺考學員學號以 append() 方法逐一置入\n        cp_abs.append(stud)\n# 列出缺考名單\nprint("="*20)\nprint("以下為 w10 缺考名單:")\n# 因為 cp_abs 資料為 list, 在此利用 for 迴圈逐一列出\nfor stud in cp_abs:\n    print(stud) \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w10-2', 'text': '1~10\xa0 odd number \n for i in range(1, 10, 2):\n    print(i,end=" ") \n \n', 'tags': '', 'url': 'w10-2.html'}, {'title': 'w11', 'text': 'w11hw \n ==================== 以下為 w11 缺考名單: 41123201 41123218 41123219 41123225 41123240 41123245 41123246 \n # 導入 ast 模組是希望利用其 literal_eval() 將 dict 格式的字串轉為 dict 資料型別\n# 以利隨後的取值運算\nimport ast\n# 定義一個函式, 以班級代號字串作為輸入, 可以傳回各班修課學員的學號數列\ndef get_stud(c_name):\n    # 將課程的班級代號字串作為 dict 的 key, 而 2022 fall 的課程代號作為對應值\n    # 使用者可以利用班級代號從 courses dict 取出課程代號\n    courses = {"1a": "0747", "1b": "0761", "2a": "0773", "2b": "0786"}\n    # 利用 c_name 從 courses 得到該學期的課程代號\n    c = courses[c_name]\n    # 利用課程代號從學校教務主機取的該班修課人員名單\n    url = "https://nfu.cycu.org/?semester=1111&courseno=" + c + "&column=True"\n    # 讀出各修課人員資料後, 以跳行符號切割, 得到的 data 為數列\n    data = open(url).read().split("\\n")\n    # 因為最後一筆資料為空字串, 因此利用數列運算將其去除\n    stud = data[:-1]\n    # get_stud() 函式最後將對應班級的修課人員學號以數列格式傳回\n    return stud\n# 利用 "1b" 作為輸入從 get_stud() 取出該班修課學員學號數列\ncp_stud = get_stud("1b")\n# get w10 quiz result\n# # 以下為 1b w11 quiz 考試結果的 JSON 檔案\ncp_w10_quiz_url = "https://gist.githubusercontent.com/mdecycu/9df4b372ac1b7386cf259ced15f1a2b2/raw/8e59f90d8ff4f1ad4fecd4f7ee159f91eb6addf9/cp1b_w11_quiz_result.json"\ndef get_score(url):\n    # 利用 open() 與 read() 讀取考試結果 JSON 檔案\n    json_data = open(url).read()\n    # 利用 ast.literal_eval() 將字串 dict, 轉為程式可用的 dict 資料型別\n    big_dict = ast.literal_eval(json_data)\n    # 從 big_dict 中, 取出 body 中的 testuser 欄位資料\n    data = big_dict["body"]["testuser"]\n    # 定義一個空 dict 資料變數, 隨後利用迴圈逐一將學號作為 key, 考試成績為 valude\n    # 組成 quiz_dict 的資料內容, 以便之後可以用學號當作輸入, 取得該員考試成績\n    quiz_dict = {}\n    for i in data:\n        # data 資料中的 user_name 為考試學員的帳號, 也就是學號\n        stud_id = data[i]["user_name"]\n        # data 資料中的 total_score 欄位為考試成績\n        # 因為考試成績為字串, 先轉為浮點數後, 再轉為整數\n        stud_score = int(float(data[i]["total_score"]))\n        # 逐一以學號為 key, 考試成績為對應 value, 將資料放入 quiz_dict\n        quiz_dict[stud_id] = stud_score\n    # 取得各學員的考試成績 quiz_dict 後, 將資料傳回\n    return quiz_dict\n# 從考試 JSON 檔案中取得考試結果的字典資料\ncp_quiz = get_score(cp_w10_quiz_url)\n# 設定一個空數列, 隨後將利用 append() 方法, 將缺考學員學號存入\ncp_abs = []\n# 從修課學員數列中, 逐一按照學號次序, 以重複迴圈將學號對應至 stud 變數\nfor stud in cp_stud:\n    # 因為缺考學員在考試結果的 dict 中並無資料, 因此利用 try except 進行判斷\n    try:\n        # 針對 stud 學號, 有考試成績者, 列出其學號與得分\n        print(stud, cp_quiz[stud])\n    except:\n        # 缺考者沒有 quiz 成績, 則在其成績欄位印出"缺"\n        print(stud, "缺")\n        # 同時將缺考學員學號以 append() 方法逐一置入\n        cp_abs.append(stud)\n# 列出缺考名單\nprint("="*20)\nprint("以下為 w11 缺考名單:")\n# 因為 cp_abs 資料為 list, 在此利用 for 迴圈逐一列出\nfor stud in cp_abs:\n    print(stud) \n \n', 'tags': '', 'url': 'w11.html'}, {'title': 'w12', 'text': 'w12hw \n \'\'\'\nf = c*9/5 + 32\nc = (f-32)*5/9\n\'\'\'\nc = input("請輸入攝氏溫度值")\nc = float(c)\n#print(c, type(c))\nf=c*9/5+32\nprint(c,f) \n \n \n \n \n以下為 Flask 伺服器端的程式碼\nfrom flask import Flask, request \nfrom flask_cors import CORS\n  \napp = Flask(__name__)\nCORS(app)\n@app.route(\'/\', methods=[\'GET\'])\ndef index():\n    # 利用 Flask request 取得 GET 模式下的 temp 變數值\n    # 若 temp 無值, 則內定為 "30"\n    temp = request.args.get(\'temp\', default="30")\n    # 當使用者在瀏覽器執行 Brython 程式時, 可以利用 GET 將 temp 變數值傳給 server 端的 Flask Python 程式\n    # 若瀏覽器前端採 form 表單取值, 則 Flask 可以 request.form.get() 取值\n    return "已經取得 temp: " + str(temp)\n  \nif __name__ == \'__main__\':\n    app.run(host=\'127.0.0.1\', port=8080, debug=True)\n \n \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w12-1', 'text': '\n \n \n \n  啟動 Brython  \n \n \n  以下事先在頁面中加入 id="brython_div" 的 div 標註\n之後可利用 Brython 的 document 模組與此 html 標註對應\n \n  利用 html 建立一個 id="btn1" 的按鈕  \n 輸入攝氏度 \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w12-1.html'}, {'title': 'w14', 'text': 'w14hw \n ==================== 以下為 w14 缺考名單: 41123209 41123211 41123218 41123219 41123225 41123227 41123228 41123232 41123236 41123240 41123247 \n # 導入 ast 模組是希望利用其 literal_eval() 將 dict 格式的字串轉為 dict 資料型別\n# 以利隨後的取值運算\nimport ast\n# 定義一個函式, 以班級代號字串作為輸入, 可以傳回各班修課學員的學號數列\ndef get_stud(c_name):\n    # 將課程的班級代號字串作為 dict 的 key, 而 2022 fall 的課程代號作為對應值\n    # 使用者可以利用班級代號從 courses dict 取出課程代號\n    courses = {"1a": "0747", "1b": "0761", "2a": "0773", "2b": "0786"}\n    # 利用 c_name 從 courses 得到該學期的課程代號\n    c = courses[c_name]\n    # 利用課程代號從學校教務主機取的該班修課人員名單\n    url = "https://nfu.cycu.org/?semester=1111&courseno=" + c + "&column=True"\n    # 讀出各修課人員資料後, 以跳行符號切割, 得到的 data 為數列\n    data = open(url).read().split("\\n")\n    # 因為最後一筆資料為空字串, 因此利用數列運算將其去除\n    stud = data[:-1]\n    # get_stud() 函式最後將對應班級的修課人員學號以數列格式傳回\n    return stud\n# 利用 "1b" 作為輸入從 get_stud() 取出該班修課學員學號數列\ncp_stud = get_stud("1b")\n# get w10 quiz result\n# # 以下為 1b w14 quiz 考試結果的 JSON 檔案\ncp_w10_quiz_url = "https://gist.githubusercontent.com/mdecycu/9df4b372ac1b7386cf259ced15f1a2b2/raw/a0be253dc36fb3d0d2e1878950dae0b13d07a8f6/2022_1208_cp_w14_1b_quiz.json"\ndef get_score(url):\n    # 利用 open() 與 read() 讀取考試結果 JSON 檔案\n    json_data = open(url).read()\n    # 利用 ast.literal_eval() 將字串 dict, 轉為程式可用的 dict 資料型別\n    big_dict = ast.literal_eval(json_data)\n    # 從 big_dict 中, 取出 body 中的 testuser 欄位資料\n    data = big_dict["body"]["testuser"]\n    # 定義一個空 dict 資料變數, 隨後利用迴圈逐一將學號作為 key, 考試成績為 valude\n    # 組成 quiz_dict 的資料內容, 以便之後可以用學號當作輸入, 取得該員考試成績\n    quiz_dict = {}\n    for i in data:\n        # data 資料中的 user_name 為考試學員的帳號, 也就是學號\n        stud_id = data[i]["user_name"]\n        # data 資料中的 total_score 欄位為考試成績\n        # 因為考試成績為字串, 先轉為浮點數後, 再轉為整數\n        stud_score = int(float(data[i]["total_score"]))\n        # 逐一以學號為 key, 考試成績為對應 value, 將資料放入 quiz_dict\n        quiz_dict[stud_id] = stud_score\n    # 取得各學員的考試成績 quiz_dict 後, 將資料傳回\n    return quiz_dict\n# 從考試 JSON 檔案中取得考試結果的字典資料\ncp_quiz = get_score(cp_w10_quiz_url)\n# 設定一個空數列, 隨後將利用 append() 方法, 將缺考學員學號存入\ncp_abs = []\n# 從修課學員數列中, 逐一按照學號次序, 以重複迴圈將學號對應至 stud 變數\nfor stud in cp_stud:\n    # 因為缺考學員在考試結果的 dict 中並無資料, 因此利用 try except 進行判斷\n    try:\n        # 針對 stud 學號, 有考試成績者, 列出其學號與得分\n        print(stud, cp_quiz[stud])\n    except:\n        # 缺考者沒有 quiz 成績, 則在其成績欄位印出"缺"\n        print(stud, "缺")\n        # 同時將缺考學員學號以 append() 方法逐一置入\n        cp_abs.append(stud)\n# 列出缺考名單\nprint("="*20)\nprint("以下為 w14 缺考名單:")\n# 因為 cp_abs 資料為 list, 在此利用 for 迴圈逐一列出\nfor stud in cp_abs:\n    print(stud) \n \n', 'tags': '', 'url': 'w14.html'}, {'title': 'w15', 'text': '1.為何學習計算機程式需要建立個人倉儲? \n 儲存檔案資料並且維護，能夠記錄甚麼人在甚麼時間進行改版。 \n \n \n 2.全球資訊網能夠提供甚麼功能或有什麼優點? \n 網際網路上進行互動和瀏覽器的主要工具，能夠搜尋你想知道的所有事情。 \n \n 3.Replit, stud.cycu.org 與 localhost 分別代表甚麼? \n Replit: 線上程式開發服務 \n stud.cycu.org:github主機名稱 \n localhost:在電腦網路中用於表示「此電腦」的主機名。 \n \n \n 4.https, ssh 到底提供使用者那些功能或優點? \n https:是一種讓訪客在網站輸入任何私人資訊可以獲得保護的安全加密措施。 \n ssh:專為遠端登入會話和其他網路服務提供安全性的協定。 \n \n 5.Brython 與 Python 有甚麼差別? \n Python為一種程式語言，而Bython能在瀏覽器上利用Python取代JavaScript。 \n \n \n 6.夠直接在瀏覽器中以 Brython 繪製中華民國國旗, 或模擬綠色方塊在方塊格點中任意移動, 代表甚麼? \n 代表我能夠讓想要的位置出現圖形。 \n \n \n 7. 變數, 字串, 整數, 浮點數, 數列, Tuple, Dictionary, 函式, 重複迴圈, class, 物件導向, 資料庫, 這些名詞對您而言代表甚麼 ? \n 程式語言的拼圖 \n \n \n \n \n \n \n', 'tags': '', 'url': 'w15.html'}, {'title': 'w16', 'text': 'hw', 'tags': '', 'url': 'w16.html'}, {'title': 'cp2022', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n', 'tags': '', 'url': 'cp2022.html'}]};
import requests
from lxml import etree
from bs4 import BeautifulSoup

# url = 'http://blog.castman.net/py-scraping-analysis-book/ch2/table/table.html'
# url = "http://booking.tpsc.sporetrofit.com/"
url = "http://booking.tpsc.sporetrofit.com/Location/BookingList?LID=DASC&CategoryId=Badminton&UseDate=2021-04-11"

# 大安 http://booking.tpsc.sporetrofit.com/Location/Reserve?LID=DASC&CategoryId=Badminton
# 中正 http://booking.tpsc.sporetrofit.com/Location/Reserve?LID=JJSC&CategoryId=Badminton
# 士林 http://booking.tpsc.sporetrofit.com/Location/Reserve?LID=SLSC&CategoryId=Badminton
# 中山 http://booking.tpsc.sporetrofit.com/Location/Reserve?LID=ZSSC&CategoryId=Badminton
# 大同 http://booking.tpsc.sporetrofit.com/Location/Reserve?LID=DTSC&CategoryId=Badminton
# 信義 http://booking.tpsc.sporetrofit.com/Location/Reserve?LID=XYSC&CategoryId=Badminton
# 文山 http://booking.tpsc.sporetrofit.com/Location/Reserve?LID=WSSC&CategoryId=Badminton
# 南港 http://booking.tpsc.sporetrofit.com/Location/Reserve?LID=NGSC&CategoryId=Badminton
# 內湖 http://booking.tpsc.sporetrofit.com/Location/Reserve?LID=NHSC&CategoryId=Badminton
# 萬華 http://booking.tpsc.sporetrofit.com/Location/Reserve?LID=WHSC&CategoryId=Badminton

# 大安 4/11 http://booking.tpsc.sporetrofit.com/Location/BookingList?LID=DASC&CategoryId=Badminton&UseDate=2021-04-11


def main():
    # resp = requests.get(url)
    # soup = BeautifulSoup(resp.text, "html.parser")
    # print(soup)
    resposne = requests.get(url)

    parser = etree.HTMLParser(encoding="utf-8")
    html = etree.HTML(resposne.text, parser=parser)

    resu=html.xpath('//*[@id="large_mid"]/table[2]/tr[3]/td/p//text()')
    print(resu)


    # print(soup.find(id='jqGrid'))
    # a = soup.find(id='jqGrid')
    # rows = soup.find('table', 'table').tbody.find_all('tr')
    # print(rows)
    # for row in rows:

    #     all_tds = row.find_all('td') 
    #     if 'href' in all_tds[3].a.attrs:
    #         href = all_tds[3].a['href']
    #     else:
    #         href = None
    #     print(all_tds[0].text, all_tds[1].text, all_tds[2].text, href, all_tds[3].a.img['src'])

    # table = soup.find('table', {'id': 'jqGrid'})
    # print(table)

    # a = soup.find('table').find(id='jqGrid')
    # print(a)



if __name__ == '__main__':
    main()
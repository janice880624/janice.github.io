import pandas as pd
import requests
from lxml import etree
from bs4 import BeautifulSoup

url = "http://booking.tpsc.sporetrofit.com/Location/BookingList?LID=DASC&CategoryId=Badminton&UseDate=2021-04-11"

html_table = '''
<table>
  <thead>
    <tr><th>Col1</th><th>Col2</th>
  </thead>
  <tbody>
    <tr><td>1a</td><td>2a</td></tr>
  </tbody>
  <tbody>
    <tr><td>1b</td><td>2b</td></tr>
  </tbody>
  <tdody>
    <tr role="row" id="1" tabindex="-1" class="jqgrow ui-row-ltr">
      <td role="gridcell" style="text-align:center;" title="大安" aria-describedby="jqGrid_LIDName">大安</td>
      <td role="gridcell" style="text-align:center;display:none;" title="DA3FBadminton10" aria-describedby="jqGrid_LSID">DA3FBadminton10</td>
      <td role="gridcell" style="text-align:center;" title="3F羽球10" aria-describedby="jqGrid_LSIDName">3F羽球10</td>
      <td role="gridcell" style="text-align:center;" title="2021-04-11" aria-describedby="jqGrid_UseDate">2021-04-11</td>
      <td role="gridcell" style="text-align:center;display:none;" title="06:00" aria-describedby="jqGrid_StartTime">06:00</td>
      <td role="gridcell" style="text-align:center;display:none;" title="07:00" aria-describedby="jqGrid_EndTime">07:00</td>
      <td role="gridcell" style="text-align:center;" title="06:00 - 07:00" aria-describedby="jqGrid_StartEndTime">06:00 - 07:00</td>
      <td role="gridcell" style="text-align:center;display:none;" title="預約" aria-describedby="jqGrid_Status">預約</td>
      <td role="gridcell" style="text-align:center;" aria-describedby="jqGrid_BookingStatus" title="預約"><input type="button" class="BookingGridBtn" style="visibility: visible; width: 80px;" onclick="checkBooking(1);" title="預約" value="預約"></td>
      </tr>
  </tody>
</table>'''

# fix HTML
# soup = BeautifulSoup(html_table, "html.parser")
# for body in soup("tbody"):
#     body.unwrap()

# df = pd.read_html(str(soup), flavor="bs4")
# print(df[0])


def main():
  resp = requests.get(url)
  soup = BeautifulSoup(resp.text, "lxml")
  print(soup)

if __name__ == '__main__':
    main()
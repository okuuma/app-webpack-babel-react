import React, {Component} from 'react';

function Quicksearch(props){

	return (
		<form method="post" className="quickSearchForm">
			<div className="searchWrapper">
				<div className="searchCategories">
					<div className="searchType filterContainer"><label htmlFor="engine">Reiseart</label>
						<div className="selectboxWrapper"><select data-search-name="Engine" name="quicksearch_engine">
							<option value="pauschal">Pauschal</option>
							<option value="lastminute">Last Minute</option>
							<option value="652">Flug</option>
							<option value="653">Hotel</option>
							<option value="655">Ferienwohnung</option>
						</select></div>
					</div>
					<div className="searchDestination filterContainer placeArrow" data-toggle="popover">
						<label>Reiseziel</label>
						<div className="selectboxWrapper">
							<span className="display searchCategoryText" data-placeholder="beliebig">beliebig</span></div>
						<div className="searchDestinationContent popover">
							<div className="qsSelectedDestinations">
								<button className="unselectAllDestinations hide" data-id="unselectAllDestinations" type="button">alle Abw&auml;hlen</button>
							</div>
							<input data-id="destinationSearch" type="search" placeholder="Region, Ort, Ziel" />
								<div className="qsSearchDestinationInProgress"><img data-src="/core/img/loading.gif" /></div>
								<div className="qsDestinationOutput"></div>
								<button className="confirmPopover" type="button">&Uuml;bernehmen</button></div>
					</div>
					<div className="searchAirport filterContainer placeArrow" data-toggle="popover">
						<label>Abflughafen</label>
						<div className="selectboxWrapper">
							<span className="display searchCategoryText" data-placeholder="beliebig">beliebig</span></div>
						<div className="searchAirportContent popover">
							<div className="searchAirportList" data-airport="list">
								<ul>
									<li style={{width:100 + '%'}}><a data-airport="none">alle abw&auml;hlen</a></li>
									<li style={{width:100 + '%'}}>
										<label><input data-airport="none" className="airportRegion custom-checkbox2" type="checkbox" value="" /><span>beliebig</span></label>
									</li>
									<li>
										<label><input className="airportRegion custom-checkbox2" type="checkbox" data-airport-region="Deutschland" value="ZSR,SXF,TXL,BRE,DTM,DRS,DUS,ERF,FRA,HHN,FDH,HAM,HAJ,FKB,KSF,CGN,LEJ,LBC,FMM,MUC,FMO,NRN,NUE,PAD,RLG,SCN,STR" /><span>Deutschland</span></label>
									</li>
									<li>
										<label><input className="airportRegion custom-checkbox2" type="checkbox" data-airport-region="Nord" value="SXF,TXL,BLL,BRE,FRA,HAM,HAJ,FMO,RLG" /><span>Nord</span></label>
									</li>
									<li>
										<label><input className="airportRegion custom-checkbox2" type="checkbox" data-airport-region="Ost" value="ZSR,SXF,TXL,DRS,ERF,FRA,HAM,HAJ,LEJ,LBC,NUE,PRG,RLG" /><span>Ost</span></label>
									</li>
									<li>
										<label><input className="airportRegion custom-checkbox2" type="checkbox" data-airport-region="S&uuml;d" value="BSL,BRN,FRA,HHN,FDH,INN,FKB,LNZ,FMM,MUC,NUE,SCN,SZG,SXB,STR,ZRH" /><span>S&uuml;d</span></label>
									</li>
									<li>
										<label><input className="airportRegion custom-checkbox2" type="checkbox" data-airport-region="West" value="AMS,BRU,DTM,DUS,ENS,FRA,HHN,CGN,LGG,LUX,MST,FMO,NRN,PAD,SCN,SXB" /><span>West</span></label>
									</li>
								</ul>
								<label>DE</label>
								<ul>
									<li data-search-val="Berlin-Sch&ouml;nefeld" data-search-code="SXF">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="SXF" /><span>Berlin-Sch&ouml;nefeld</span></label>
									</li>
									<li data-search-val="Berlin-Tegel" data-search-code="TXL">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="TXL" /><span>Berlin-Tegel</span></label>
									</li>
									<li data-search-val="Bremen" data-search-code="BRE">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="BRE" /><span>Bremen</span></label>
									</li>
									<li data-search-val="Dortmund" data-search-code="DTM">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="DTM" /><span>Dortmund</span></label>
									</li>
									<li data-search-val="Dresden" data-search-code="DRS">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="DRS" /><span>Dresden</span></label>
									</li>
									<li data-search-val="D&uuml;sseldorf" data-search-code="DUS">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="DUS" /><span>D&uuml;sseldorf</span></label>
									</li>
									<li data-search-val="Erfurt-Weimar" data-search-code="ERF">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="ERF" /><span>Erfurt-Weimar</span></label>
									</li>
									<li data-search-val="Frankfurt" data-search-code="FRA">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="FRA" /><span>Frankfurt</span></label>
									</li>
									<li data-search-val="Frankfurt-Hahn" data-search-code="HHN">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="HHN" /><span>Frankfurt-Hahn</span></label>
									</li>
									<li data-search-val="Friedrichshafen" data-search-code="FDH">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="FDH" /><span>Friedrichshafen</span></label>
									</li>
									<li data-search-val="Hamburg" data-search-code="HAM">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="HAM" /><span>Hamburg</span></label>
									</li>
									<li data-search-val="Hannover" data-search-code="HAJ">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="HAJ" /><span>Hannover</span></label>
									</li>
									<li data-search-val="Karlsruhe" data-search-code="FKB">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="FKB" /><span>Karlsruhe</span></label>
									</li>
									<li data-search-val="Kassel-Calden" data-search-code="KSF">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="KSF" /><span>Kassel-Calden</span></label>
									</li>
									<li data-search-val="K&ouml;ln-Bonn" data-search-code="CGN">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="CGN" /><span>K&ouml;ln-Bonn</span></label>
									</li>
									<li data-search-val="Leipzig-Halle" data-search-code="LEJ">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="LEJ" /><span>Leipzig-Halle</span></label>
									</li>
									<li data-search-val="L&uuml;beck" data-search-code="LBC">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="LBC" /><span>L&uuml;beck</span></label>
									</li>
									<li data-search-val="Memmingen-Allg&auml;u" data-search-code="FMM">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="FMM" /><span>Memmingen-Allg&auml;u</span></label>
									</li>
									<li data-search-val="M&uuml;nchen" data-search-code="MUC">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="MUC" /><span>M&uuml;nchen</span></label>
									</li>
									<li data-search-val="M&uuml;nster-Osnabr&uuml;ck" data-search-code="FMO">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="FMO" /><span>M&uuml;nster-Osnabr&uuml;ck</span></label>
									</li>
									<li data-search-val="Niederrhein Weeze" data-search-code="NRN">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="NRN" /><span>Niederrhein Weeze</span></label>
									</li>
									<li data-search-val="N&uuml;rnberg" data-search-code="NUE">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="NUE" /><span>N&uuml;rnberg</span></label>
									</li>
									<li data-search-val="Paderborn" data-search-code="PAD">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="PAD" /><span>Paderborn</span></label>
									</li>
									<li data-search-val="Rostock" data-search-code="RLG">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="RLG" /><span>Rostock</span></label>
									</li>
									<li data-search-val="Saarbr&uuml;cken" data-search-code="SCN">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="SCN" /><span>Saarbr&uuml;cken</span></label>
									</li>
									<li data-search-val="Schwerin" data-search-code="SZW">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="SZW" /><span>Schwerin</span></label>
									</li>
									<li data-search-val="Stuttgart" data-search-code="STR">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="STR" /><span>Stuttgart</span></label>
									</li>
									<li data-search-val="Zweibr&uuml;cken" data-search-code="ZQW">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="ZQW" /><span>Zweibr&uuml;cken</span></label>
									</li>
								</ul>
								<label>CH</label>
								<ul>
									<li data-search-val="Basel-Mulhouse" data-search-code="BSL">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="BSL" /><span>Basel-Mulhouse</span></label>
									</li>
									<li data-search-val="Genf" data-search-code="GVA">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="GVA" /><span>Genf</span></label>
									</li>
									<li data-search-val="Z&uuml;rich" data-search-code="ZRH">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="ZRH" /><span>Z&uuml;rich</span></label>
									</li>
								</ul>
								<label>AT</label>
								<ul>
									<li data-search-val="Graz" data-search-code="GRZ">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="GRZ" /><span>Graz</span></label>
									</li>
									<li data-search-val="Innsbruck" data-search-code="INN">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="INN" /><span>Innsbruck</span></label>
									</li>
									<li data-search-val="Klagenfurt" data-search-code="KLU">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="KLU" /><span>Klagenfurt</span></label>
									</li>
									<li data-search-val="Linz" data-search-code="LNZ">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="LNZ" /><span>Linz</span></label>
									</li>
									<li data-search-val="Salzburg" data-search-code="SZG">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="SZG" /><span>Salzburg</span></label>
									</li>
									<li data-search-val="Wien" data-search-code="VIE">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="VIE" /><span>Wien</span></label>
									</li>
								</ul>
								<label>Sonstige</label>
								<ul>
									<li data-search-val="Amsterdam" data-search-code="AMS">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="AMS" /><span>Amsterdam</span></label>
									</li>
									<li data-search-val="Bern-Belp" data-search-code="BRN">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="BRN" /><span>Bern-Belp</span></label>
									</li>
									<li data-search-val="Billund" data-search-code="BLL">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="BLL" /><span>Billund</span></label>
									</li>
									<li data-search-val="Bratislava - M. R. tef&aacute;nik" data-search-code="BTS">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="BTS" /><span>Bratislava - M. R. tef&aacute;nik</span></label>
									</li>
									<li data-search-val="Breslau - Kopernikus" data-search-code="WRO">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="WRO" /><span>Breslau - Kopernikus</span></label>
									</li>
									<li data-search-val="Br&uuml;ssel" data-search-code="BRU">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="BRU" /><span>Br&uuml;ssel</span></label>
									</li>
									<li data-search-val="Eindhoven" data-search-code="EIN">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="EIN" /><span>Eindhoven</span></label>
									</li>
									<li data-search-val="Enschede" data-search-code="ENS">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="ENS" /><span>Enschede</span></label>
									</li>
									<li data-search-val="Groningen" data-search-code="GRQ">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="GRQ" /><span>Groningen</span></label>
									</li>
									<li data-search-val="Ljubljana-Brnik" data-search-code="LJU">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="LJU" /><span>Ljubljana-Brnik</span></label>
									</li>
									<li data-search-val="L&uuml;ttich" data-search-code="LGG">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="LGG" /><span>L&uuml;ttich</span></label>
									</li>
									<li data-search-val="Luxemburg" data-search-code="LUX">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="LUX" /><span>Luxemburg</span></label>
									</li>
									<li data-search-val="Maastricht - Aachen" data-search-code="MST">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="MST" /><span>Maastricht - Aachen</span></label>
									</li>
									<li data-search-val="Mailand-Malpensa" data-search-code="MXP">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="MXP" /><span>Mailand-Malpensa</span></label>
									</li>
									<li data-search-val="Paris - Orly" data-search-code="ORY">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="ORY" /><span>Paris - Orly</span></label>
									</li>
									<li data-search-val="Prag" data-search-code="PRG">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="PRG" /><span>Prag</span></label>
									</li>
									<li data-search-val="Strasbourg" data-search-code="SXB">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="SXB" /><span>Strasbourg</span></label>
									</li>
									<li data-search-val="Warschau" data-search-code="WAW">
										<label><input data-search-name="DepartureAirportCodes" type="checkbox" className="custom-checkbox2" value="WAW" /><span>Warschau</span></label>
									</li>
								</ul>
							</div>
							<button className="confirmPopover" type="button">&Uuml;bernehmen</button>
						</div>
					</div>
					<div className="searchDate" data-toggle="popover">
						<div className="searchDateOut filterContainer">
							<label>Zeitraum</label><input className="display searchCategoryText OutboundMinDate" readOnly />
						</div>
						<div className="searchDateTo">-</div>
						<div className="searchDateBack filterContainer">
							<input className="display searchCategoryText InboundMaxDate" readOnly data-placeholder="beliebig" />
						</div>
						<div className="searchDateContent popover" role="tooltip">
							<div className="filterWrapper">
								<div className="">
									<div className="filter">
										<div className="range"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="searchDays filterContainer"><label>Dauer</label>
						<div className="selectboxWrapper"><select name="quicksearch_duration" className="rangeDays">
							<option value="-1">beliebig</option>
							<option value="exact">exakt wie Hin- und R&uuml;ckreise</option>
							<option value="6,7">1 Woche</option>
							<option value="13,14">2 Wochen</option>
							<option value="20,21">3 Wochen</option>
							<option value="6,9">6-9 Tage</option>
							<option value="10,12">10-12 Tage</option>
							<option value="13,15">13-15 Tage</option>
							<option value="16,22">16-22 Tage</option>
							<option value="1">1 Tag</option>
							<option value="2">2 Tage</option>
							<option value="3">3 Tage</option>
							<option value="4">4 Tage</option>
							<option value="5">5 Tage</option>
							<option value="6">6 Tage</option>
							<option value="7">7 Tage</option>
							<option value="8">8 Tage</option>
							<option value="9">9 Tage</option>
							<option value="10">10 Tage</option>
							<option value="11">11 Tage</option>
							<option value="12">12 Tage</option>
							<option value="13">13 Tage</option>
							<option value="14">14 Tage</option>
							<option value="15">15 Tage</option>
							<option value="16">16 Tage</option>
							<option value="17">17 Tage</option>
							<option value="18">18 Tage</option>
							<option value="19">19 Tage</option>
							<option value="20">20 Tage</option>
							<option value="21">21 Tage</option>
							<option value="22">22 Tage</option>
							<option value="27,28">4 Wochen</option>
							<option value="34,35">5 Wochen</option>
							<option value="41,42">6 Wochen</option>
						</select></div>
					</div>
					<div className="searchPerson last filterContainer placeArrow" data-toggle="popover">
						<label>Reisende</label>
						<div className="selectboxWrapper"><span className="display searchCategoryText">2 Erwachsene</span></div>
						<div className="searchPersonContent popover" role="tooltip">
							<div className="filterWrapper clearfix">
								<div className="scrollWrapper">
									<div className="filter">
										<button type="button" className="change-adults decrease-adults">
											<span className="minus">-</span></button>
										<div className="selectWrapper"><select name="numberOfAdults" className="numberOfAdults">
											<option value="35">1 Erwachsener</option>
											<option value="35,35">2 Erwachsene</option>
											<option value="35,35,35">3 Erwachsene</option>
											<option value="35,35,35,35">4 Erwachsene</option>
											<option value="35,35,35,35,35">5 Erwachsene</option>
											<option value="35,35,35,35,35,35">6 Erwachsene</option>
											<option value="35,35,35,35,35,35,35">7 Erwachsene</option>
											<option value="35,35,35,35,35,35,35,35">8 Erwachsene</option>
										</select></div>
										<button type="button" className="change-adults increase-adults" title="Bei Buchung von mehr als 8 Personen oder wenn Sie mehrere Zimmer / Objekte ben&ouml;tigen, wenden Sie sich bitte an den Karstadt Reiseservice oder Ihr Karstadt Reiseb&uuml;ro.">
											<span className="plus">+</span></button>
										<button type="button" className="change-children decrease-children">
											<span className="minus">-</span></button>
										<div className="selectWrapper">
											<select name="numberOfChildren" className="change-children numberOfChildren">
												<option value="0">keine Kinder</option>
												<option value="1">1 Kind</option>
												<option value="2">2 Kinder</option>
												<option value="3">3 Kinder</option>
												<option value="4">4 Kinder</option>
												<option value="5">5 Kinder</option>
												<option value="6">6 Kinder</option>
												<option value="7">7 Kinder</option>
											</select></div>
										<button type="button" className="change-children increase-children">
											<span className="plus">+</span></button>
									</div>
									<div className="subfilter" style={{display:'none'}}><span className="person">Alter Kind 1</span>
										<button type="button" className="change-age decrease-age">
											<span className="minus">-</span></button>
										<div className="selectWrapper"><select name="childAge">
											<option value="1">1 Jahr</option>
											<option value="2">2 Jahre</option>
											<option value="3">3 Jahre</option>
											<option value="4">4 Jahre</option>
											<option value="5">5 Jahre</option>
											<option value="6">6 Jahre</option>
											<option value="7">7 Jahre</option>
											<option value="8">8 Jahre</option>
											<option value="9">9 Jahre</option>
											<option value="10">10 Jahre</option>
											<option value="11">11 Jahre</option>
											<option value="12">12 Jahre</option>
											<option value="13">13 Jahre</option>
											<option value="14">14 Jahre</option>
											<option value="15">15 Jahre</option>
											<option value="16">16 Jahre</option>
											<option value="17">17 Jahre</option>
										</select></div>
										<button type="button" className="change-age increase-age">
											<span className="plus">+</span></button>
									</div>
									<div className="filterInput">
										<button className="confirmPopover" type="button">&Uuml;bernehmen</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<button type="button" className="submitSearch">
						<span className="value1">Jetzt finden</span><span className="value2">Jetzt finden</span><span className="ks ks-arrow-right"></span>
					</button>
				</div>
			</div>
		</form>
	);
}

export default Quicksearch;
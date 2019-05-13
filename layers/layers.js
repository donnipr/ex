var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_POLA_RUANG_0 = new ol.format.GeoJSON();
var features_POLA_RUANG_0 = format_POLA_RUANG_0.readFeatures(json_POLA_RUANG_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLA_RUANG_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_POLA_RUANG_0.addFeatures(features_POLA_RUANG_0);var lyr_POLA_RUANG_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POLA_RUANG_0, 
                style: style_POLA_RUANG_0,
    title: 'POLA_RUANG<br />\
    <img src="styles/legend/POLA_RUANG_0_0.png" /> Hutan Konservasi (TAHURA)<br />\
    <img src="styles/legend/POLA_RUANG_0_1.png" /> Hutan Lindung<br />\
    <img src="styles/legend/POLA_RUANG_0_2.png" /> Hutan Produksi<br />\
    <img src="styles/legend/POLA_RUANG_0_3.png" /> Hutan Rakyat<br />\
    <img src="styles/legend/POLA_RUANG_0_4.png" /> Industri<br />\
    <img src="styles/legend/POLA_RUANG_0_5.png" /> Lindung Geologi (Bengawan Solo Purba)<br />\
    <img src="styles/legend/POLA_RUANG_0_6.png" /> Longsor<br />\
    <img src="styles/legend/POLA_RUANG_0_7.png" /> Militer<br />\
    <img src="styles/legend/POLA_RUANG_0_8.png" /> Perkebunan<br />\
    <img src="styles/legend/POLA_RUANG_0_9.png" /> Permukiman<br />\
    <img src="styles/legend/POLA_RUANG_0_10.png" /> Pertambangan<br />\
    <img src="styles/legend/POLA_RUANG_0_11.png" /> Pertanian Lahan Basah<br />\
    <img src="styles/legend/POLA_RUANG_0_12.png" /> Pertanian Lahan Kering<br />\
    <img src="styles/legend/POLA_RUANG_0_13.png" /> Plasma Nutfah<br />\
    <img src="styles/legend/POLA_RUANG_0_14.png" /> Rawan Banjir<br />\
    <img src="styles/legend/POLA_RUANG_0_15.png" /> Resapan Air<br />\
    <img src="styles/legend/POLA_RUANG_0_16.png" /> Sempadan Goa<br />\
    <img src="styles/legend/POLA_RUANG_0_17.png" /> Sempadan Mataair<br />\
    <img src="styles/legend/POLA_RUANG_0_18.png" /> Sempadan Pantai<br />\
    <img src="styles/legend/POLA_RUANG_0_19.png" /> Sempadan Sungai<br />\
    <img src="styles/legend/POLA_RUANG_0_20.png" /> Sempadan Telaga<br />\
    <img src="styles/legend/POLA_RUANG_0_21.png" /> <br />'
        });var format_KAWASAN_LINDUNG_KARST_1 = new ol.format.GeoJSON();
var features_KAWASAN_LINDUNG_KARST_1 = format_KAWASAN_LINDUNG_KARST_1.readFeatures(json_KAWASAN_LINDUNG_KARST_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAWASAN_LINDUNG_KARST_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KAWASAN_LINDUNG_KARST_1.addFeatures(features_KAWASAN_LINDUNG_KARST_1);var lyr_KAWASAN_LINDUNG_KARST_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KAWASAN_LINDUNG_KARST_1, 
                style: style_KAWASAN_LINDUNG_KARST_1,
                title: '<img src="styles/legend/KAWASAN_LINDUNG_KARST_1.png" /> KAWASAN_LINDUNG_KARST'
            });var format_JALAN_2 = new ol.format.GeoJSON();
var features_JALAN_2 = format_JALAN_2.readFeatures(json_JALAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_JALAN_2.addFeatures(features_JALAN_2);var lyr_JALAN_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_2, 
                style: style_JALAN_2,
    title: 'JALAN<br />\
    <img src="styles/legend/JALAN_2_0.png" /> Kolektor Primer<br />\
    <img src="styles/legend/JALAN_2_1.png" /> Kolektor Sekunder<br />'
        });var format_KECAMATAN_3 = new ol.format.GeoJSON();
var features_KECAMATAN_3 = format_KECAMATAN_3.readFeatures(json_KECAMATAN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KECAMATAN_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KECAMATAN_3.addFeatures(features_KECAMATAN_3);var lyr_KECAMATAN_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KECAMATAN_3, 
                style: style_KECAMATAN_3,
                title: '<img src="styles/legend/KECAMATAN_3.png" /> KECAMATAN'
            });var format_SUNGAI_LINE_4 = new ol.format.GeoJSON();
var features_SUNGAI_LINE_4 = format_SUNGAI_LINE_4.readFeatures(json_SUNGAI_LINE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LINE_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SUNGAI_LINE_4.addFeatures(features_SUNGAI_LINE_4);var lyr_SUNGAI_LINE_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_LINE_4, 
                style: style_SUNGAI_LINE_4,
                title: '<img src="styles/legend/SUNGAI_LINE_4.png" /> SUNGAI_LINE'
            });var format_TitikLokasi_5 = new ol.format.GeoJSON();
var features_TitikLokasi_5 = format_TitikLokasi_5.readFeatures(json_TitikLokasi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikLokasi_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TitikLokasi_5.addFeatures(features_TitikLokasi_5);var lyr_TitikLokasi_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TitikLokasi_5, 
                style: style_TitikLokasi_5,
    title: 'Titik Lokasi<br />\
    <img src="styles/legend/TitikLokasi_5_0.png" /> Kawasan Hutan Rakyat<br />\
    <img src="styles/legend/TitikLokasi_5_1.png" /> Kawasan Hutan Rakyat dan Kawasan Karst<br />\
    <img src="styles/legend/TitikLokasi_5_2.png" /> Kawasan Pemukiman<br />\
    <img src="styles/legend/TitikLokasi_5_3.png" /> Kawasan Rawan Bencana Longsor<br />\
    <img src="styles/legend/TitikLokasi_5_4.png" /> Sempadan Pantai dan Kawasan Karst<br />'
        });

lyr_POLA_RUANG_0.setVisible(true);lyr_KAWASAN_LINDUNG_KARST_1.setVisible(true);lyr_JALAN_2.setVisible(true);lyr_KECAMATAN_3.setVisible(true);lyr_SUNGAI_LINE_4.setVisible(true);lyr_TitikLokasi_5.setVisible(true);
var layersList = [baseLayer,lyr_POLA_RUANG_0,lyr_KAWASAN_LINDUNG_KARST_1,lyr_JALAN_2,lyr_KECAMATAN_3,lyr_SUNGAI_LINE_4,lyr_TitikLokasi_5];
lyr_POLA_RUANG_0.set('fieldAliases', {'KAWASAN': 'KAWASAN', 'KETERANGAN': 'KETERANGAN', 'PERUNTUKAN': 'PERUNTUKAN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Luas': 'Luas', });
lyr_KAWASAN_LINDUNG_KARST_1.set('fieldAliases', {'Kawasan': 'Kawasan', 'PERUNTUKAN': 'PERUNTUKAN', });
lyr_JALAN_2.set('fieldAliases', {'KAB_2008': 'KAB_2008', 'PROV': 'PROV', 'Fungsi': 'Fungsi', 'kode_pngkl': 'kode_pngkl', 'STATUS_JLN': 'STATUS_JLN', 'id': 'id', });
lyr_KECAMATAN_3.set('fieldAliases', {'NAMA_KEC': 'NAMA_KEC', 'COUNT': 'COUNT', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'HECTARES': 'HECTARES', });
lyr_SUNGAI_LINE_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LAYER': 'LAYER', 'KETERANGAN': 'KETERANGAN', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_LE_1': 'SHAPE_LE_1', 'SHAPE_LE_2': 'SHAPE_LE_2', });
lyr_TitikLokasi_5.set('fieldAliases', {'no_': 'no_', 'lokasi': 'lokasi', 'x': 'x', 'y': 'y', 'Peruntukan': 'Peruntukan', 'Indikasi_P': 'Indikasi_P', 'Sanksi': 'Sanksi', 'Link': 'Link', 'Photo': 'Photo', });
lyr_POLA_RUANG_0.set('fieldImages', {'KAWASAN': 'TextEdit', 'KETERANGAN': 'TextEdit', 'PERUNTUKAN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Luas': 'TextEdit', });
lyr_KAWASAN_LINDUNG_KARST_1.set('fieldImages', {'Kawasan': 'TextEdit', 'PERUNTUKAN': 'TextEdit', });
lyr_JALAN_2.set('fieldImages', {'KAB_2008': 'TextEdit', 'PROV': 'TextEdit', 'Fungsi': 'TextEdit', 'kode_pngkl': 'TextEdit', 'STATUS_JLN': 'TextEdit', 'id': 'TextEdit', });
lyr_KECAMATAN_3.set('fieldImages', {'NAMA_KEC': 'TextEdit', 'COUNT': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'HECTARES': 'TextEdit', });
lyr_SUNGAI_LINE_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'LAYER': 'TextEdit', 'KETERANGAN': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_LE_1': 'TextEdit', 'SHAPE_LE_2': 'TextEdit', });
lyr_TitikLokasi_5.set('fieldImages', {'no_': 'TextEdit', 'lokasi': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Peruntukan': 'TextEdit', 'Indikasi_P': 'TextEdit', 'Sanksi': 'TextEdit', 'Link': 'TextEdit', 'Photo': 'Photo', });
lyr_POLA_RUANG_0.set('fieldLabels', {'KAWASAN': 'no label', 'KETERANGAN': 'no label', 'PERUNTUKAN': 'inline label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Luas': 'no label', });
lyr_KAWASAN_LINDUNG_KARST_1.set('fieldLabels', {'Kawasan': 'no label', 'PERUNTUKAN': 'no label', });
lyr_JALAN_2.set('fieldLabels', {'KAB_2008': 'no label', 'PROV': 'no label', 'Fungsi': 'no label', 'kode_pngkl': 'no label', 'STATUS_JLN': 'no label', 'id': 'no label', });
lyr_KECAMATAN_3.set('fieldLabels', {'NAMA_KEC': 'no label', 'COUNT': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'HECTARES': 'no label', });
lyr_SUNGAI_LINE_4.set('fieldLabels', {'OBJECTID': 'no label', 'LAYER': 'no label', 'KETERANGAN': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_LE_1': 'no label', 'SHAPE_LE_2': 'no label', });
lyr_TitikLokasi_5.set('fieldLabels', {'no_': 'no label', 'lokasi': 'inline label', 'x': 'no label', 'y': 'no label', 'Peruntukan': 'inline label', 'Indikasi_P': 'inline label', 'Sanksi': 'inline label', 'Link': 'no label', 'Photo': 'no label', });
lyr_TitikLokasi_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
package com.teamflavour.flavourwheels.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.tomcat.util.codec.binary.Base64;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.Collection;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "beerLib")
public class Beer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    //    @GeneratedValue(strategy = GenerationType.AUTO)
//    private String idF;
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "date")
    private Date date;
    @Column(name = "beerName")
    private String beerName;
    @Column(name = "brewery")
    private String brewery;
    @Column(name = "beerColor")
    private String beerColor;
    @Column(name = "productionDate")
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private String productionDate;
    @Column(name = "processingMethod")
    private String processingMethod;
    @Column(name = "tastingMethod")
    private String tastingMethod;
    @Column(name = "grapeType")
    private String grapeType;
    @Column(name = "userNotes")
    private String userNotes;
    @Column(name = "flag")
    private Boolean flag;
    @Column(name = "file")
    @Lob
    private Blob file;
    @Column(name = "filetype")
    private String fileType;
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private User user;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "beer_flavors",
            joinColumns = @JoinColumn(
                    name = "beer_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(
                    name = "flavor_id", referencedColumnName = "id"))
    private Collection<FlavorBeer> flavorBeers;

    public Beer() {
        super();
    }

    public Beer(@JsonProperty("beerName") String beerName, @JsonProperty("brewery") String brewery,
                @JsonProperty("beerColor") String beerColor, @JsonProperty("productionDate") String productionDate, @JsonProperty("tastingMethod") String tastingMethod,
                @JsonProperty("grapeType") String grapeType, @JsonProperty("processingMethod") String processingMethod,
                @JsonProperty("userNotes") String userNotes)//, @JsonProperty("file") MultipartFile file)
    {
        super();
        this.date = new Date(System.currentTimeMillis());
        this.beerName = beerName;
        this.brewery = brewery;
        this.beerColor = beerColor;
        this.productionDate = productionDate;
        this.processingMethod = processingMethod;
        this.tastingMethod = tastingMethod;
        this.grapeType = grapeType;
        this.userNotes = userNotes;
        //  this.file = file;
    }


    public Beer(Date date, String beerName, String brewery, String beerColor, String productionDate, String processingMethod, String tastingMethod, String grapeType, String userNotes, Boolean flag,
                Blob file) {
        super();
        this.date = date;
        this.beerName = beerName;
        this.brewery = brewery;
        this.beerColor = beerColor;
        this.productionDate = productionDate;
        this.processingMethod = processingMethod;
        this.tastingMethod = tastingMethod;
        this.grapeType = grapeType;
        this.userNotes = userNotes;
        this.flag = flag;
        this.file = file;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBeerName() {
        return beerName;
    }

    public void setBeerName(String beerName) {
        this.beerName = beerName;
    }

    public String getBrewery() {
        return brewery;
    }

    public void setBrewery(String brewery) {
        this.brewery = brewery;
    }

    public String getBeerColor() {
        return beerColor;
    }

    public void setBeerColor(String beerColor) {
        this.beerColor = beerColor;
    }

    public String getProcessingMethod() {
        return processingMethod;
    }

    public void setProcessingMethod(String processingMethod) {
        this.processingMethod = processingMethod;
    }

    public String getTastingMethod() {
        return tastingMethod;
    }

    public void setTastingMethod(String tastingMethod) {
        this.tastingMethod = tastingMethod;
    }

    public String getGrapeType() {
        return grapeType;
    }

    public void setGrapeType(String grapeType) {
        this.grapeType = grapeType;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getUserNotes() {
        return userNotes;
    }

    public void setUserNotes(String userNotes) {
        this.userNotes = userNotes;
    }

    public Boolean isFlag() {
        return flag;
    }

    public void setFlag(Boolean flag) {
        this.flag = flag;
    }

    public Blob getFile() {
        return file;
    }

    public void setFile(Blob file) {
        this.file = file;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Collection<FlavorBeer> getFlavorBeers() {
        return flavorBeers;
    }

    //flavorBeers opgesomd
    public String getFlavorString() {
        String result = "";
        for (FlavorBeer f : flavorBeers) {
            result += f.getName() + ", ";
        }
        if (result.length() > 1) {
            result = result.substring(0, result.length() - 2);
        }
        return result;
    }

    public void setFlavorBeers(Collection<FlavorBeer> flavorBeers) {
        this.flavorBeers = flavorBeers;
    }

    public String getProductionDate() {
        return productionDate;
    }

    public void setProductionDate(String productionDate) {
        this.productionDate = productionDate;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }

    public String getImageString() throws SQLException {
        if (file == null) {
            return "data:image/png;base64,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";
        }
        return "data:image/" + fileType + ";base64," + Base64.encodeBase64String(file.getBytes(1, (int) file.length()));
    }


    //    public String getFileName() {
//        return fileName;
//    }
//
//    public void setFileName(String fileName) {
//        this.fileName = fileName;
//    }

    //    public ArrayList<FlavorCoffee> getFlavorCoffees() { return flavorCoffees; }
//
//    public void setFlavorCoffees(ArrayList<FlavorCoffee> flavorCoffees) { this.flavorCoffees = flavorCoffees; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Beer beer = (Beer) o;
        return Objects.equals(id,
                beer.id) &&
                Objects.equals(beerName, beer.beerName) &&
                Objects.equals(brewery, beer.brewery) &&
                Objects.equals(beerColor, beer.beerColor) &&
                Objects.equals(processingMethod, beer.processingMethod) &&
                Objects.equals(tastingMethod, beer.tastingMethod) &&
                Objects.equals(date, beer.date) &&
                Objects.equals(grapeType, beer.grapeType) &&
                Objects.equals(userNotes, beer.userNotes) &&
                Objects.equals(flag, beer.flag) &&
                Objects.equals(file, beer.file);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, date, beerName, brewery, beerColor, productionDate, processingMethod, tastingMethod, grapeType, userNotes, flag);
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Beer Library{");
        sb.append("id=").append(id);
        sb.append(", date='").append(date).append('\'');
        sb.append(", beerName='").append(beerName).append('\'');
        sb.append(", brewery='").append(brewery).append('\'');
        sb.append(", beerColor='").append(beerColor).append('\'');
        sb.append(", productionDate='").append(productionDate).append('\'');
        sb.append(", processingMethod='").append(processingMethod).append('\'');
        sb.append(", tastingMethod='").append(tastingMethod).append('\'');
        sb.append(", grapeType='").append(grapeType).append('\'');
        sb.append(", userNotes='").append(userNotes).append('\'');
        sb.append('}');
        return sb.toString();
    }
}
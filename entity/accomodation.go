package entity

import "gorm.io/gorm"

type Accomodation struct {
	gorm.Model
	Name_type string
	Price int

	Services []Service `gorm:"foreignKey:AccomodationID"`
}
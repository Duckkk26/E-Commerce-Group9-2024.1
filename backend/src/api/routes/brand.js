import express from 'express';
import BrandModel from '../../db/model/Brand.js';

const router = express.Router();

router.post('/add', async (req, res) => {
    try {
        const { name, category, image } = req.body;

        if (!name || !category) {
            return res.status(400).json({
                success: false,
                error: "Name and category are required.",
            });
        }

        const existingBrand = await BrandModel.findOne({ name, category });
        if (existingBrand) {
            return res.status(409).json({
                success: false,
                error: "A brand with the same name and category already exists.",
            });
        }

        const brand = new BrandModel({ name, category, image });
        await brand.save();

        res.status(201).json({
            success: true,
            message: "Brand successfully added.",
            brand: { id: brand._id, name: brand.name, category: brand.category },
        });
    } catch (error) {
        console.error("Error adding brand:", error);
        res.status(500).json({
            success: false,
            error: "Internal Server Error",
        });
    }
});

router.get('/:category', async (req, res) => {
    try {
        const { category } = req.params;

        if (!category) {
            return res.status(400).json({
                success: false,
                error: "Category is required.",
            });
        }

        const brands = await BrandModel.find({ category });
        if (brands.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No brands found in this category.",
            });
        }

        res.status(200).json({
            success: true,
            brands,
        });
    } catch (error) {
        console.error("Error fetching brands:", error);
        res.status(500).json({
            success: false,
            error: "Internal Server Error",
        });
    }
});

export { router };
